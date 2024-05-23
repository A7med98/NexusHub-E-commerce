import React from "react";
import { useEffect, useState } from "react";

import styles from "../pages/index.module.css";
let intial = true;
const Timer = () => {
  const timeToHours = 1.01 * 60 * 60 * 1000;
  let countDownDate = new Date().getTime() + timeToHours;
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
  return (
    <div className={styles.labelTime}>
      <h2 className={styles.specialDiscount}>Special Discount</h2>
      <div className={styles.time}>
        <div className={styles.hour}>
          <div className={styles.hourDiv}>{hours>10 ? hours : "0" + hours}</div>
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
  );
};

export default Timer;
