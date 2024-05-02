import styles from "./ProductInformation.module.css";

const ProductInformation = ({ product }) => {
  return (
    <div className={styles.productInformation}>
      <div className={styles.labelBadge}>
        <div className={styles.labelReview}>
          <h2 className={styles.label}>{product.title}</h2>
          <div className={styles.reviewSold}>
            <div className={styles.review}>
              <img
                className={styles.curvedStar1}
                loading="lazy"
                alt=""
                src="/curved--star1.svg"
              />
              <div className={styles.information}>
                <span>5.0</span>
                <span className={styles.span}>/5.0</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.badge}>
          <button className={styles.type}>
            <div className={styles.category}>{product.category}</div>
          </button>
          <button className={styles.bestseller}>
            <div className={styles.bestSeller}>Best Seller</div>
          </button>
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.price1}>${product.price}</div>
        <div className={styles.crossPrice}>$00.00</div>
      </div>
      <div className={styles.description}>
        <div className={styles.description1}>
          The Xierra X16 mouse is a cutting-edge peripheral that combines
          precision and comfort. Its ergonomic design fits snugly in your hand,
          while its high-precision sensor ensures smooth and accurate{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
