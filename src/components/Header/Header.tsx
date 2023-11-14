import styles from "./styles.module.scss";
import { MdSearch, MdAccountCircle, MdShoppingCart } from "react-icons/md";
import { Container } from "react-bootstrap";

interface Props {
  showHeader: boolean;
}

const Header = ({ showHeader }: Props) => {
  return (
    <header
      className={styles.header}
      style={
        showHeader
          ? {
              backgroundColor: "#cd8c42",
              boxShadow: "0px 3px 6px 1px rgba(0,0,0,0.2)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <Container className={styles.containerHeader}>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            type="search"
            placeholder="Pesquise!"
          ></input>
          <MdSearch color="#fff" />
        </div>
        <nav className={styles.nav}>
          <MdAccountCircle size={30} color="#fff" />
          <MdShoppingCart size={30} color="#fff" />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
