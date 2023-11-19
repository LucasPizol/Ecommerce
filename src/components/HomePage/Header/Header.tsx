import styles from "./styles.module.scss";
import { MdSearch, MdAccountCircle, MdShoppingCart } from "react-icons/md";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Container className={styles.containerHeader}>
        <div className={styles.search}>
          <input className={styles.search_input} type="search" placeholder="Pesquise!"></input>
          <MdSearch color="#fff" />
        </div>
        <nav className={styles.nav}>
          <MdAccountCircle size={30} color="#fff" onClick={() => navigate("/auth")} />
          <MdShoppingCart size={30} color="#fff" />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
