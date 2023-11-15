import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

const WhyUs = () => {
  return (
    <div className={styles.whyUs}>
      <Container className={styles.whyUsContainer}>
        <div>
          <h1>Por que a gente?</h1>
          <p>
            Temos melhor café da manhã de Poços de Caldas. Há 5 anos, oferecemos
            um cardápio completo com opções tradicionais e inovadoras,
            preparadas com ingredientes frescos e de qualidade. Venha
            experimentar e se sentir em casa.
          </p>
        </div>
        <img src="/why_us_photo.webp" />
      </Container>
    </div>
  );
};

export default WhyUs;
