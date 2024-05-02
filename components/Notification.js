import styles from "./Notification.module.css";

export default function ErrorNotification ()  {
  return (
    <section className={styles.alert}>
      <div className={styles.alert1}>
        <img
          className={styles.alertcheckCircleIcon}
          alt=""
          src="/alertcheckcircle.svg"
        />
        <input
          className={styles.textButton}
          placeholder="Successfully Remove Cart"
          type="text"
        />
        <img className={styles.curvedCross} alt="" src="/curved--cross.svg" />
      </div>
    </section>
  );
};

