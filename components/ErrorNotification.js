import styles from "./ErrorNotification.module.css";

export default function Notification() {
  return (
    <section className={styles.footerInstance}>
      <div className={styles.alert}>
        <div className={styles.alert1}>
          <img
            className={styles.alertcrossCircleIcon}
            alt=""
            src="/alertcrosscircle.svg"
          />
          <div className={styles.textButton}>
            <div className={styles.text}>
              <div className={styles.label}>Failed Remove Cart</div>
            </div>
          </div>
          <img className={styles.curvedCross} alt="" src="/curved--cross.svg" />
        </div>
      </div>
    </section>
  );
}
