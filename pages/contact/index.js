import Header from "../../components/Header";
import Footer from "../../components/footer";
import ContactContainer from "../../components/ContactContainer";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Header />
      <ContactContainer />
      <Footer />
    </div>
  );
}
