import styles from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const totalQuantites = useSelector((state) => state.cart).totalQuantity;

  const AuthCartPath = `${isAuth ? "/cart" : "/"}`;
  const router = useRouter();
  const isActive = (href) => router.pathname === href;
  function handleAuth() {
    if (!isAuth) {
      // alert("Please Login to view cart");
    }
  }
  return (
    <header className={styles.fRAMEHOME}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.nexushubWrapper}>
            <h1 className={styles.nexushub}>
              <span>Nexus</span>
              <span className={styles.hub}>Hub</span>
            </h1>
          </div>
          <div className={styles.inputField}>
            <div className={styles.inputFieldSupportText}>
              <div className={styles.inputField1}>
                <div className={styles.container1}>
                  <img
                    className={styles.iconSearch}
                    alt="search-icon"
                    src="/icon--search.svg"
                  />
                  <input
                    className={styles.description}
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containerInner}>
            <div className={styles.frameParent}>
              <div className={styles.iconWrapWrapper}>
                <Link href={AuthCartPath} className={styles.iconWrap}>
                  <img
                    className={styles.bagIcon}
                    loading="lazy"
                    alt=""
                    src="/bag.svg"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.text}>
                      {isAuth ? totalQuantites : "0"}
                    </div>
                  </div>
                </Link>
              </div>
              <img
                className={styles.accountIcon}
                loading="lazy"
                alt=""
                src="/account@2x.png"
              />
            </div>
          </div>
        </div>
        <nav className={styles.navBar}>
          <Link
            href="/"
            className={`${styles.home} ${isActive("/") ? styles.active : ""}`}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className={`${styles.contact} ${
              isActive("/contact") ? styles.active : ""
            }`}
          >
            Contact
          </Link>
          <Link
            onClick={handleAuth()}
            href={AuthCartPath}
            className={`${styles.cart} ${
              isActive("/cart") ? styles.active : ""
            }`}
            passHref
          >
            Cart
          </Link>
        </nav>
        <div className={styles.horizontalDivider}>
          <div className={styles.horizontalDivider1}>
            <img className={styles.dividerIcon} alt="" src="/divider.svg" />
          </div>
        </div>
      </div>
    </header>
  );
}
