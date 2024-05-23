import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import styles from "./index.module.css";
import ProductCard from "../components/ProductCard";
import { useEffect, useRef, useState } from "react";
import { fetchTechProducts } from "../utils/api";
import { fetchCartData } from "../store/cart-actions";
import { useDispatch } from "react-redux";
import Timer from "../components/Timer";

export default function Home() {
  let isInitial = true;
  const dispatch = useDispatch();

  //states
  const [products, setProducts] = useState([]);

  //refs
  const elementRef = useRef(null);

  //effects
  useEffect(() => {
    if (isInitial) {
      dispatch(fetchCartData());
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await fetchTechProducts();
      setProducts(data);
    };
    if (isInitial) {
      fetchProductsData();
    }
    isInitial = false;
  }, []);

  //functions
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.middle}>
        {products.length > 0 && <Carousel slides={products} />}
        <div className={styles.labelButton}>
          <Timer />
          <div className={styles.button}>
            <button
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 30, 250, -10);
              }}
              className={styles.previousButton}
            >
              <img
                className={styles.iconArrowLeft}
                alt=""
                src="/icon--arrowleft.svg"
              />
            </button>
            <button
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 30, 250, 10);
              }}
              className={styles.nextButton}
            >
              <img
                className={styles.iconArrowRight}
                alt=""
                src="/icon--arrowright.svg"
              />
            </button>
          </div>
        </div>
      </div>

      <section className={styles.productsSection}>
        <div className={styles.productsList}>
          <div className={styles.productCard} ref={elementRef}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
          <div className={styles.productCardMob} >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
      <Footer />
    </div>
  );
}
