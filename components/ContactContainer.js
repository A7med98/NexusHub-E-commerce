import InformationBox from "./InformationBox";
import styles from "./ContactContainer.module.css";

const Container = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contactHeader}>
        <div className={styles.textButton}>
          <div className={styles.text}>
            <h1 className={styles.label}>Contact us</h1>
            <div className={styles.description}>
              If you have any questions or require additional information, we
              encourage you to contact us. We are ready to assist in answering
              your inquiries
            </div>
          </div>
        </div>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image2@2x.png"
        />
      </div>
      <div className={styles.contactInfo}>
        <InformationBox
          title="Our Location"
          description="Jl. Medan Merdeka Barat No. 2, Jakarta Pusat, Jakarta 10110, Indonesia."
          link="Visit us"
        />
        <InformationBox
          title="Email Us"
          description="Through email you can submit complaints and also suggestions to us, please contact. "
          link="NexusHub-acc@contact.com"
        />
        <InformationBox
          title="Mobile Chat"
          description="We can also be reached using Whatsapp and calling."
          link="+62 812 382 33xxx"
        />
      </div>
    </section>
  );
};

export default Container;
