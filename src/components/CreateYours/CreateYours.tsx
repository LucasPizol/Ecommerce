import { useState } from "react";
import { Container, Form, FormSelect } from "react-bootstrap";
import styles from "./styles.module.scss";

const CreateYours = () => {
  const [coffeeLevel, setCoffeeLevel] = useState<number>(10);

  return (
    <div className={styles.createYours}>
      <Container className={styles.createYoursGrid}>
        <h1 className={styles.createYoursTitle}>CRIE VOCÊ MESMO!</h1>

        <div className={styles.createYoursFormDiv}>
          <div className={styles.imageDiv}>
            <div
              className={styles.divHide}
              style={{ height: `${100 - coffeeLevel}%` }}
            ></div>
            <img className={styles.image} src="/coffee-cup.svg" />
          </div>
          <Form className={styles.form}>
            <div>
              <label>Tamanho do copo</label>
              <FormSelect
                onChange={() => {
                  if (coffeeLevel === 10) {
                    setCoffeeLevel(40);
                  }
                }}
              >
                <option selected disabled></option>
                <option>300 ml</option>
                <option>400 ml</option>
                <option>500 ml</option>
                <option>1 L</option>
              </FormSelect>
            </div>
            <div className="">
              <label>Temperatura</label>
              <FormSelect
                disabled={coffeeLevel < 40}
                onChange={() => {
                  if (coffeeLevel === 40) {
                    setCoffeeLevel(70);
                  }
                }}
              >
                <option selected disabled></option>
                <option>Quente</option>
                <option>Frio</option>
              </FormSelect>
            </div>
            <div className="">
              <label>Tipo do café</label>
              <FormSelect
                disabled={coffeeLevel < 70}
                onChange={() => {
                  if (coffeeLevel === 70) {
                    setCoffeeLevel(100);
                  }
                }}
              >
                <option selected disabled></option>
                <option value="CafePreto">Café Preto</option>
                <option>Capuccino</option>
                <option>Frapuccino</option>
              </FormSelect>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CreateYours;
