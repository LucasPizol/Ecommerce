import styles from "./styles.module.scss";
import { MdShoppingCart } from "react-icons/md";

interface Props {
  coffee: any;
}

const Product = ({ coffee }: Props) => {
  return (
    <div className={styles.product}>
      <img src={coffee.images[0]} alt={coffee.name} loading="lazy" />
      <div className={styles.productDescription}>
        <p>{coffee.name}</p>
        <p>
          {(coffee.default_price.unit_amount / 100).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button>
          CARRINHO <MdShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
