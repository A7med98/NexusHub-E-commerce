import Header from "../../components/Header";
import Notification from "../../components/Notification";
import ErrorNotification from "../../components/ErrorNotification";
import CartItem from "../../components/CartItem";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./cart.module.css";
import { useRouter } from "next/router";

export default function Cart() {
  const cartItem = useSelector((state) => state.cart).items;
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const notification = useSelector((state) => state.ui.notification);
  console.log(notification);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      // alert("Please Login to view cart");
      console.log("Please Login to view cart")
      router.replace("/");
    }
  }, []);

  return (
    <div className={styles.cart}>
      <Header />
      <Notification />
      <ErrorNotification />
      <div className={styles.pageTitles}>
        <div className={styles.pageMenuTitles}>
          <div className={styles.pageTitle}>Home</div>
          <div className={styles.socialMenuBar}>
            <img
              className={styles.curvedChevronSmallRight}
              loading="lazy"
              alt=""
              src="/curved--chevronsmallright.svg"
            />
          </div>
          <div className={styles.pageTitle2}>Cart</div>
        </div>
      </div>
      <section className={styles.container}>
        <div className={styles.content}>
          {cartItem?.length > 0 &&
            cartItem.map((product) => (
              <CartItem
                key={product.productId}
                id={product.productId}
                quantity={product.quantity}
              />
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
