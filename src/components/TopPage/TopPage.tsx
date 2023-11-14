import { Container } from "react-bootstrap";
import { coffees } from "../../api";
import styles from "./styles.module.scss";

export interface Coffee {
  img: string;
  title: string;
  price: number;
}

const coffeesOrdered = coffees.sort((a, b) => b.sales - a.sales).slice(0, 3);

const TopPage = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.topContainer}>
        <h1 className={styles.title}>BEST SELLERS</h1>
        <div className={styles.coffeesContainer}>
          {coffeesOrdered.map((coffee: Coffee) => (
            <div
              style={{
                background: `linear-gradient(#ffffff00, #000000dd),url(${coffee.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={styles.coffee}
            >
              <div className={styles.coffeeDescription}>
                <p>{coffee.title}</p>
                <p>
                  {coffee?.price?.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopPage;
