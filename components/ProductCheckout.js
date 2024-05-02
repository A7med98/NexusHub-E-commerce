import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductCheckout.module.css";
import { cartActions } from "../store/cart-slice";

const ProductCheckout = ({ product, id }) => {
  const cartItem = useSelector((state) => state.cart).items;
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  console.log(cartItem, "asasas1");

  const productFinder = cartItem.find((item) => item.productId == id);
  console.log(productFinder, "asasas2");
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    if (isAuth) {
      // alert("Please Login to remove item from cart");

      dispatch(cartActions.removeItemFromCart(+id));
    }
  };

  const addItemHandler = () => {
    if (isAuth) {
      // alert("Please Login to add item to cart");

      dispatch(cartActions.addItemToCart(+id));
    }
  };
  return (
    <div className={styles.productCheckout}>
      <div className={styles.quantity}>
        <div className={styles.label1}>Quantity</div>
        <div className={styles.quantityEditorStock}>
          <div className={styles.quantityEditor}>
            <img
              onClick={removeItemHandler}
              className={styles.iconMinus}
              loading="lazy"
              alt=""
              src="/icon--minus.svg"
            />
            <div className={styles.number}>
              {!productFinder ? "0" : productFinder.quantity}
            </div>
            <img
              onClick={addItemHandler}
              className={styles.iconPlus}
              loading="lazy"
              alt=""
              src="/icon--plus.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.subtotal}>
        <div className={styles.subtotal1}>Total</div>
        <div className={styles.price}>
          ${!productFinder ? 0 : +productFinder.quantity * +product.price}
        </div>
      </div>
      <button onClick={addItemHandler} className={styles.buttonList}>
        <div className={styles.addToCart}>
          <div className={styles.button1}>Add to Cart</div>
          <img className={styles.iconCart4} alt="" src="/icon--cart4.svg" />
        </div>
      </button>
      <div className={styles.link}>
        <div className={styles.button6}>
          <img
            className={styles.iconShare1}
            loading="lazy"
            alt=""
            src="/icon--share1.svg"
          />
          <div className={styles.button7}>Share</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
