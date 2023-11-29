import { useState } from "react";
import { Button, Container, Form, FormSelect } from "react-bootstrap";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { MdCreditCard } from "react-icons/md";
import Loading from "../../Loading";

interface Coffee {
  size?: CoffeOption;
  temp?: CoffeOption;
  type?: CoffeOption;
}

interface CoffeOption {
  name: string;
  price: number;
  type: string;
}

const coffeeOptions = [
  { name: "300 ML", price: 300, type: "size" },
  { name: "400 ML", price: 400, type: "size" },
  { name: "500 ML", price: 500, type: "size" },
  { name: "1 L", price: 800, type: "size" },
  { name: "Quente", price: 100, type: "temp" },
  { name: "Frio", price: 100, type: "temp" },
  { name: "Café Preto", price: 500, type: "type" },
  { name: "Capuccino", price: 800, type: "type" },
  { name: "Chocolate Suíço", price: 1500, type: "type" },
];

const CreateYours = () => {
  const [coffeeLevel, setCoffeeLevel] = useState<number>(10);
  const [coffee, setCoffee] = useState<Coffee>({
    size: undefined,
    temp: undefined,
    type: undefined,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChangeCoffee = (e: any, key: string) => {
    const newCoffee = { ...coffee, [key]: coffeeOptions[e.currentTarget.value] };
    setCoffee(newCoffee);
  };

  const createCheckoutSession = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const token = sessionStorage.getItem("coffe-shop-token");

    if (!token) {
      navigate("/auth");
      return;
    }

    const productToBuy = {
      products: [
        {
          price_data: {
            currency: "brl",
            unit_amount: coffee.size?.price,
            product_data: { name: coffee.size?.name },
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "brl",
            unit_amount: coffee.temp?.price,
            product_data: { name: coffee.temp?.name },
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: "brl",
            unit_amount: coffee.type?.price,
            product_data: { name: coffee.type?.name },
          },
          quantity: 1,
        },
      ],
    };

    const res = await fetch("http://localhost:3000/checkout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToBuy),
    });

    const url = await res.json();
    setLoading(false);

    window.location.href = url.url;
  };

  return (
    <div className={styles.createYours}>
      <Container className={styles.createYoursGrid}>
        <h1 className={styles.createYoursTitle}>Crie você mesmo!</h1>

        <div className={styles.createYoursFormDiv}>
          <div className={styles.imageDiv}>
            <img className={styles.imageOutline} src="/coffee_cup_outline.svg" alt="Copo de Café apenas Linhas" />
            <div className={styles.divHide} style={{ height: `${100 - coffeeLevel}%` }}></div>
            <img className={styles.image} src="/coffee-cup.svg" alt="Copo de Café" />
          </div>
          <Form className={styles.form}>
            <div>
              <label>Tamanho do copo</label>
              <FormSelect
                className={styles.formSelect}
                onChange={(e) => {
                  if (coffeeLevel === 10) {
                    setCoffeeLevel(40);
                  }
                  handleChangeCoffee(e, "size");
                }}
              >
                <option selected disabled></option>
                {coffeeOptions.map((option, index) => {
                  if (option.type !== "size") return null;
                  return (
                    <option value={index}>
                      {option.name} - {(option.price / 100).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                    </option>
                  );
                })}
              </FormSelect>
            </div>
            <div className="">
              <label>Temperatura</label>
              <FormSelect
                disabled={coffeeLevel < 40}
                onChange={(e) => {
                  if (coffeeLevel === 40) {
                    setCoffeeLevel(70);
                  }

                  handleChangeCoffee(e, "temp");
                }}
              >
                <option selected disabled></option>
                {coffeeOptions.map((option, index) => {
                  if (option.type !== "temp") return null;
                  return (
                    <option value={index}>
                      {option.name} - {(option.price / 100).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                    </option>
                  );
                })}
              </FormSelect>
            </div>
            <div className="">
              <label>Tipo do café</label>
              <FormSelect
                disabled={coffeeLevel < 70}
                onChange={(e) => {
                  if (coffeeLevel === 70) {
                    setCoffeeLevel(100);
                  }
                  handleChangeCoffee(e, "type");
                }}
              >
                <option selected disabled></option>
                {coffeeOptions.map((option, index) => {
                  if (option.type !== "type") return null;
                  return (
                    <option value={index}>
                      {option.name} - {(option.price / 100).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                    </option>
                  );
                })}
              </FormSelect>
            </div>
            <button disabled={coffeeLevel !== 100} onClick={createCheckoutSession}>
              <MdCreditCard /> PAGAR
            </button>
          </Form>
        </div>
      </Container>
      {loading ? <Loading /> : null}
    </div>
  );
};

export default CreateYours;
