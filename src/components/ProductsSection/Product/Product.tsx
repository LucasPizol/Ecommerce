import { Coffee } from "../../TopPage/TopPage";
import styles from "./styles.module.scss";
import { MdShoppingCart } from "react-icons/md";

interface Props {
  coffee: Coffee;
}

const Product = ({ coffee }: Props) => {
  return (
    <div className={styles.product}>
      <img src={coffee.img} alt={coffee.title} />
      <div className={styles.productDescription}>
        <p>{coffee.title}</p>
        <p>
          {coffee.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button>
        CARRINHO <MdShoppingCart />
      </button>
    </div>
  );
};

export default Product;
