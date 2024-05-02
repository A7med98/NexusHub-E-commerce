import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import styles from "./index.module.css";
import ProductCard from "../components/ProductCard";
import { useEffect, useRef, useState } from "react";
import { fetchTechProducts } from "../utils/api";
import { fetchCartData } from "../store/cart-actions";
import { useDispatch } from "react-redux";

export default function Home() {
  let isInitial = true;
  const timeToHours = 1.1 * 60 * 60 * 1000;
  let countDownDate = new Date().getTime() + timeToHours;
  const dispatch = useDispatch();

  //states
  const [products, setProducts] = useState([]);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //refs
  const elementRef = useRef(null);

  //effects
  useEffect(() => {
    if (isInitial) {
      dispatch(fetchCartData());
    }
  }, [dispatch]);
  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();

      const difference = countDownDate - now;

      const newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        console.log("The Time Has Ended");
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, []);

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
          <div className={styles.labelTime}>
            <h2 className={styles.specialDiscount}>Special Discount</h2>
            <div className={styles.time}>
              <div className={styles.hour}>
                <div className={styles.hourDiv}>{hours}</div>
              </div>
              <div className={styles.dotsGroup}>
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
              <div className={styles.minute}>
                <div className={styles.minuteDiv}>
                  {minutes < 10 ? "0" + minutes : minutes}
                </div>
              </div>
              <div className={styles.dotsGroup}>
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
              <div className={styles.second}>
                <div className={styles.secondDiv}>
                  {seconds < 10 ? "0" + seconds : seconds}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <button
              onClick={() => {
                handleHorizantalScroll(elementRef.current, 25, 250, -10);
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

      <Footer />
    </div>
  );
}
