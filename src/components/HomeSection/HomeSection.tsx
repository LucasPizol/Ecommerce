import styles from "./styles.module.scss";
import { Container, Button } from "react-bootstrap";
const HomeSection = () => {
  return (
    <main className={styles.main}>
      <div className={styles.imageDiv}>
        <img src="public/img_terno.jpg" className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <Container className={styles.text}>
        <p className={styles.subtitle}>Loja do</p>
        <h1 className={styles.title}>Terno</h1>
        <Button variant="outline-light">Adquira</Button>
      </Container>
    </main>
  );
};

export default HomeSection;
