import styles from "./ProductCard.module.css";
import Link from "next/link";

export default function ProductCard({ product }) {
const path = `/products/${product.id}`

  return (
    <Link href={path} className={styles.productCard}>
      <div className={styles.image}>

        <img className={styles.imageIcon} alt="" src={product.image} />
        <div className={styles.cart}>
          <img
            className={styles.cartCart4}
            loading="lazy"
            alt=""
            src="/cart--cart4.svg"
          />
          

        </div>
      </div>
      <div className={styles.productDetail}>
        <div className={styles.labelPrice}>
          <div className={styles.itemName}>{product.title}</div>
          <div className={styles.price}>
            <div className={styles.price1}>${product.price}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
