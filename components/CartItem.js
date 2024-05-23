import { fetchProductById } from "../utils/api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import styles from "./CartItem.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart({ id, quantity }) {
  const notify = () =>
    toast.warn("Something Wrong Occured", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart(id));
  };
  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
    if (!id.changed) {
    }
  };
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductsData = async () => {
      console.log(id, "xxxxxx");
      const data = await fetchProductById(id);
      console.log(data, "dddd");
      setProduct(data);
    };
    fetchProductsData();
  }, []);
  return (
    <div className={styles.cart1}>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src={product.image}
            />
          </div>
          <div className={styles.content1}>
            <div className={styles.labelBadge}>
              <div className={styles.labelIcon}>
                <div className={styles.productTitle}>{product.title}</div>
                <img
                  onClick={deleteItemHandler}
                  className={styles.curvedTrash2}
                  loading="lazy"
                  alt=""
                  src="/curved--trash2.svg"
                />
              </div>
              <button className={styles.type}>
                <div className={styles.category}>{product.category}</div>
              </button>
            </div>
            <div className={styles.CatPriceMob}>
              <button className={styles.typeMob}>
                <div className={styles.category}>{product.category}</div>
              </button>
              <div className={styles.priceMob}>${product.price * quantity}</div>
            </div>
            <div className={styles.priceAction}>
              <div className={styles.price}>${product.price * quantity}</div>

              <div className={styles.action}>
                <div className={styles.button}>
                  <div className={styles.button1}>Write Note</div>
                </div>
                <img
                  className={styles.dividerIcon}
                  alt=""
                  src="/divider-1.svg"
                />
                <div className={styles.button2}>
                  <img
                    onClick={removeItemHandler}
                    className={styles.iconMinus}
                    loading="lazy"
                    alt=""
                    src="/icon--minus1.svg"
                  />
                  <div className={styles.button3}>{quantity}</div>
                  <img
                    onClick={addItemHandler}
                    className={styles.iconPlus}
                    loading="lazy"
                    alt=""
                    src="/icon--plus1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
