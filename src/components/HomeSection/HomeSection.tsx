import styles from "./styles.module.scss";
import { Container } from "react-bootstrap";
const HomeSection = () => {
  return (
    <main
      className={styles.main}
      style={{
        background:
          "linear-gradient(#ffffff00, #000000dd), url(/img_wallpaper.webp)",
        backgroundSize: "cover",
        backgroundPosition: "70%",
      }}
    >
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
