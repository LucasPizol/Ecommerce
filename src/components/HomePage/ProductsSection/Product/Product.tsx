import styles from "./styles.module.scss";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Props {
  coffee: any;
}

const Product = ({ coffee }: Props) => {
  const navigate = useNavigate();
  const orderProduct = async () => {
    const token = sessionStorage.getItem("coffe-shop-token");

    if (!token) {
      navigate("/auth");
      return;
    }

    const productToBuy = {
      products: [
        {
          price: coffee.default_price.id,
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

    window.location.href = url.url;
  };

  return (
    <div className={styles.product}>
      <img src={coffee.images[0]} alt={coffee.name} loading="lazy" />
      <div className={styles.productDescription}>
        <p>{coffee.name}</p>
        <p>
          {(coffee.default_price.unit_amount / 100).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={orderProduct}>
          PEDIR <MdShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
