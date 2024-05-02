import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <h1 className={styles.nexushub}>
          <span>Nexus</span>
          <span className={styles.hub}>Hub</span>
        </h1>
        <div className={styles.nexushubAllRights}>
          © 2023 NexusHub. All rights reserved.
        </div>
        <div className={styles.payment}>
          <div className={styles.wrapperBadge}>
            <img
              className={styles.badgeIcon}
              loading="lazy"
              alt=""
              src="/badge.svg"
            />
          </div>
          <div className={styles.wrapperBadge1}>
            <img className={styles.badgeIcon1} alt="" src="/badge-1.svg" />
          </div>
          <div className={styles.wrapperBadge2}>
            <img className={styles.badgeIcon2} alt="" src="/badge-2.svg" />
          </div>
          <div className={styles.wrapperBadge3}>
            <img className={styles.badgeIcon3} alt="" src="/badge-3.svg" />
          </div>
          <div className={styles.wrapperBadge4}>
            <img className={styles.badgeIcon4} alt="" src="/badge-4.svg" />
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.company}>
          <div className={styles.company1}>Company</div>
          <div className={styles.subMenu}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.contact}>Contact</div>
            <div className={styles.partner}>Partner</div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.social1}>Social</div>
          <div className={styles.subMenu1}>
            <div className={styles.instagram}>Instagram</div>
            <div className={styles.twitter}>Twitter</div>
            <div className={styles.facebook}>Facebook</div>
            <div className={styles.linkedin}>LinkedIn</div>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.faq1}>FAQ</div>
          <div className={styles.subMenu2}>
            <div className={styles.account}>Account</div>
            <div className={styles.deliveries}>Deliveries</div>
            <div className={styles.orders}>Orders</div>
            <div className={styles.payments}>Payments</div>
          </div>
        </div>
        <div className={styles.resources}>
          <div className={styles.resources1}>Resources</div>
          <div className={styles.subMenu3}>
            <div className={styles.eBooks}>E-books</div>
            <div className={styles.tutorials}>Tutorials</div>
            <div className={styles.course}>Course</div>
            <div className={styles.blog}>Blog</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
