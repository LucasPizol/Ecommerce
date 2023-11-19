import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Loading from "../../Loading";

export interface Coffee {
  img: string;
  title: string;
  price: number;
}

interface Props {
  data: any;
}

const TopPage = ({ data }: Props) => {
  const coffeesOrdered = data?.products?.sort((a: any, b: any) => b.sales - a.sales).slice(0, 3);

  return (
    <div className={styles.main}>
      <Container className={styles.topContainer}>
        <h1 className={styles.title}>Best Sellers</h1>
        <div className={styles.coffeesContainer}>
          {!data ? (
            <Loading />
          ) : (
            coffeesOrdered?.map((coffee: any) => (
              <div key={coffee.id} className={styles.coffee}>
                <img className={styles.coffeeImg} src={coffee.images[0]} />
                <div className={styles.coffeeDescription}>
                  <p>{coffee.name}</p>
                  <p>
                    Por apenas:{" "}
                    {(coffee?.default_price.unit_amount / 100)?.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default TopPage;
