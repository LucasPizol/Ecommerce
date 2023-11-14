import { Container } from "react-bootstrap";
import { coffees } from "../../api";
import { Coffee } from "../TopPage/TopPage";
import Product from "./Product/Product";
import styles from "./styles.module.scss";

const ProductsSection = () => {
  return (
    <div className={styles.productsSection}>
      <h1>CONFIRA NOSSOS PRODUTOS</h1>
      <Container className={styles.productsContainer}>
        {coffees.map((coffee: Coffee) => (
          <Product coffee={coffee} />
        ))}
      </Container>
    </div>
  );
};

export default ProductsSection;
