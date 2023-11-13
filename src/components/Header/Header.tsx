import styles from "./styles.module.scss";
import { MdSearch, MdAccountCircle, MdShoppingCart } from "react-icons/md";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.containerHeader}>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            type="search"
            placeholder="Pesquise!"
          ></input>
          <MdSearch />
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
