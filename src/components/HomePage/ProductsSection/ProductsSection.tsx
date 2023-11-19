import { Container } from "react-bootstrap";
import { Coffee } from "../TopPage/TopPage";
import Product from "./Product/Product";
import styles from "./styles.module.scss";
import { useRef } from "react";

interface Props {
  data: any;
}

const ProductsSection = ({ data }: Props) => {
  const carousel = useRef<HTMLDivElement>(null);

  if (!data?.products) return <h1>Loading</h1>;

  const handleNextSlide = () => {
    carousel.current!.scrollLeft += carousel.current!.offsetWidth / 2;
  };

  const handlePreviousSlide = () => {
    carousel.current!.scrollLeft -= carousel.current!.offsetWidth / 2;
  };

  const trueData = [...data.products, ...data.products, ...data.products];

  return (
    <div className={styles.productsSection}>
      <h1>Confira nossos produtos</h1>
      <Container className={styles.productsContainer}>
        <button className={styles.previousButton} onClick={handlePreviousSlide}>
          {"<"}
        </button>
        <div className={styles.carousel} ref={carousel}>
          {trueData?.map((coffee: Coffee) => (
            <Product coffee={coffee} />
          ))}
        </div>

        <button className={styles.nextButton} onClick={handleNextSlide}>
          {">"}
        </button>
      </Container>
    </div>
  );
};

export default ProductsSection;
