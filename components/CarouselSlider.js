import React from "react";
import styles from "./Carousel.module.css";

export default function CarouselSlider() {
  return (
    <div className={styles.headText}>
      <div className={styles.text}>
        <h1 className={styles.label}>Mouse</h1>
        <div className={styles.description}>
          Explore our diverse selection of electronic mice for sale, featuring
          cutting-edge technology, ergonomic designs, and unbeatable prices.
          Shop now!
        </div>
        <div></div>
      </div>
      <img className={styles.mouseImgIcon} alt="Mouse" src="/mouse-img2.png" />
    </div>
  );
}
