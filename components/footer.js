import styles from "./footer.module.css";
import { useState } from "react";

export default function Footer() {
  const [dropDownMenu, setDropDownMenu] = useState(null);

  function handleDropMenu(num) {
    if (dropDownMenu === num) {
      setDropDownMenu(null);
    } else {
      setDropDownMenu(num);
    }
  }
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
          <div className={styles.subMenu}>
            <div className={styles.instagram}>Instagram</div>
            <div className={styles.twitter}>Twitter</div>
            <div className={styles.facebook}>Facebook</div>
            <div className={styles.linkedin}>LinkedIn</div>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.faq1}>FAQ</div>
          <div className={styles.subMenu}>
            <div className={styles.account}>Account</div>
            <div className={styles.deliveries}>Deliveries</div>
            <div className={styles.orders}>Orders</div>
            <div className={styles.payments}>Payments</div>
          </div>
        </div>
        <div className={styles.resources}>
          <div className={styles.resources1}>Resources</div>
          <div className={styles.subMenu}>
            <div className={styles.eBooks}>E-books</div>
            <div className={styles.tutorials}>Tutorials</div>
            <div className={styles.course}>Course</div>
            <div className={styles.blog}>Blog</div>
          </div>
        </div>
      </div>
      <div className={styles.menuMob}>
        <div
          onClick={() => {
            handleDropMenu(1);
          }}
          className={styles.companyMob}
        >
          <button
            className={`${styles.titleMob1} ${
              dropDownMenu === 1 ? styles.Active1 : ""
            }`}
          >
            Company
          </button>
          <img
            className={`${styles.arrowImg} ${
              dropDownMenu === 1 ? styles.activeArrow : ""
            }`}
            src="/Vector.svg"
          />
          <div
            className={
              dropDownMenu === 1 ? styles.subMenuMobActive : styles.subMenuMob
            }
          >
            <div className={styles.subTitleMob}>About Us</div>
            <div className={styles.subTitleMob}>Contact</div>
            <div className={styles.subTitleMob}>Partner</div>
          </div>
        </div>
        <div
          onClick={() => {
            handleDropMenu(2);
          }}
          className={`${styles.companyMob} ${
            dropDownMenu === 1 ? styles.menuMobWrapperActive : ""
          }`}
        >
          <button
            className={`${styles.titleMob1} ${
              dropDownMenu === 2 ? styles.Active1 : ""
            }`}
          >
            Social
          </button>
          <img
            className={`${styles.arrowImg} ${
              dropDownMenu === 2 ? styles.activeArrow : ""
            }`}
            src="/Vector.svg"
          />

          <div
            className={
              dropDownMenu === 2 ? styles.subMenuMobActive2 : styles.subMenuMob2
            }
          >
            <div className={styles.subTitleMob}>Instagram</div>
            <div className={styles.subTitleMob}>Twitter</div>
            <div className={styles.subTitleMob}>Facebook</div>
            <div className={styles.subTitleMob}>LinkedIn</div>
          </div>
        </div>
        <div
          onClick={() => {
            handleDropMenu(3);
          }}
          className={`${styles.companyMob} ${
            dropDownMenu === 2 ? styles.menuMobWrapperActive2 : ""
          }`}
        >
          <button
            className={`${styles.titleMob1} ${
              dropDownMenu === 3 ? styles.Active1 : ""
            }`}
          >
            FAQ
          </button>
          <img
            className={`${styles.arrowImg} ${
              dropDownMenu === 3 ? styles.activeArrow : ""
            }`}
            src="/Vector.svg"
          />

          <div
            className={
              dropDownMenu === 3 ? styles.subMenuMobActive3 : styles.subMenuMob3
            }
          >
            <div className={styles.subTitleMob}>Account</div>
            <div className={styles.subTitleMob}>Deliveries</div>
            <div className={styles.subTitleMob}>Orders</div>
            <div className={styles.subTitleMob}>Payments</div>
          </div>
        </div>
        <div
          onClick={() => {
            handleDropMenu(4);
          }}
          className={`${styles.companyMob} ${
            dropDownMenu === 3 ? styles.menuMobWrapperActive2 : ""
          }`}
        >
          <button
            className={`${styles.titleMob1} ${
              dropDownMenu === 4 ? styles.Active1 : ""
            }`}
          >
            Resources
          </button>
          <img
            className={`${styles.arrowImg} ${
              dropDownMenu === 4 ? styles.activeArrow : ""
            }`}
            src="/Vector.svg"
          />

          <div
            className={
              dropDownMenu === 4 ? styles.subMenuMobActive4 : styles.subMenuMob4
            }
          >
            <div className={styles.subTitleMob}>E-books</div>
            <div className={styles.subTitleMob}>Tutorials</div>
            <div className={styles.subTitleMob}>Course</div>
            <div className={styles.subTitleMob}>Blog</div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.payment2} ${
          dropDownMenu === 4 ? styles.menuMobWrapperActive2 : ""
        }`}
      >
        <div className={styles.wrapperBadge}>
          <img className={styles.badgeIcon} alt="" src="/badge.svg" />
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
    </footer>
  );
}
