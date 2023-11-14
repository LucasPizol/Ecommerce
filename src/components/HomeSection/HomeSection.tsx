import styles from "./styles.module.scss";
import { Container, Button } from "react-bootstrap";
const HomeSection = () => {
  return (
    <main className={styles.main}>
      <div className={styles.imageDiv}>
        <img src="public/img_wallpaper.jpg" className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <Container className={styles.text}>
        <h1 className={styles.title}>
          EXPERIMENTE <br />A NOVA{" "}
          <span className={styles.color}>SENSAÇÃO</span>
        </h1>
        <p className={styles.subtitle}>
          O melhor café de Poços de Caldas e região.
        </p>
        <div className={styles.buttons}>
          <button>Experimentar</button>
          <button>Saiba mais</button>
        </div>
      </Container>
    </main>
  );
};

export default HomeSection;
