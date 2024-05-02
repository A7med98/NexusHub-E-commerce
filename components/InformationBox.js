import styles from "./InformationBox.module.css";

const InformationBox = ({ title, description, link }) => {
  return (
    <div className={styles.pressInquiries}>
      <div className={styles.text} >
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.link}>{link}</div>
      </div>
    </div>
  );
};

export default InformationBox;
