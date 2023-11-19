import { Container } from "react-bootstrap";
import Product from "./Product/Product";
import styles from "./styles.module.scss";
import { useRef } from "react";
import Loading from "../../Loading";

interface Props {
  data: any;
}

const ProductsSection = ({ data }: Props) => {
  const carousel = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    carousel.current!.scrollLeft += carousel.current!.offsetWidth / 2;
  };

  const handlePreviousSlide = () => {
    carousel.current!.scrollLeft -= carousel.current!.offsetWidth / 2;
  };

  return (
    <div className={styles.productsSection}>
      <h1>Confira nossos produtos</h1>

      <Container className={styles.productsContainer}>
        {!data?.products ? (
          <Loading />
        ) : (
          <>
            <button className={styles.previousButton} onClick={handlePreviousSlide}>
              {"<"}
            </button>
            <div className={styles.carousel} ref={carousel}>
              {data?.products?.map((coffee: any) => (
                <Product key={coffee.id} coffee={coffee} />
              ))}
            </div>

            <button className={styles.nextButton} onClick={handleNextSlide}>
              {">"}
            </button>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductsSection;
