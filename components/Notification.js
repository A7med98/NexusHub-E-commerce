import styles from "./Notification.module.css";
export default function Notification() {
  return (
    <section className={styles.footerInstance}>
      <div className={styles.alert}>
        <div className={styles.alert1}>
          <img
            className={styles.alertcrossCircleIcon}
            alt=""
            src="/alertcheckcircle.svg"
          />
          <div className={styles.textButton}>
            <div className={styles.text}>
              <div className={styles.label}>Successfully Remove Cart</div>
            </div>
          </div>
          <img className={styles.curvedCross} alt="" src="/curved--cross.svg" />
        </div>
      </div>
    </section>
  );
}


