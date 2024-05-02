import Header from "../../components/Header";
import ProductInformation from "../../components/ProductInformation";
import ProductCheckout from "../../components/ProductCheckout";
import Footer from "../../components/footer";
import styles from "./ProductDetailPage.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchProductById } from "../../utils/api";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log({ id });
  const [product, setProduct] = useState(null);
  const [isActive, setisActive] = useState("");

  function handleImagePicker(src) {
    setisActive(src);
    console.log(isActive);
  }
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetchProductById(id);
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>no products yet.</div>;
  }
  return (
    <div className={styles.productDetailReview}>
      <Header />
      <div className={styles.pageTitles}>
        <div className={styles.pageMenuTitles}>
          <div className={styles.pageTitle}>Home</div>
          <div className={styles.socialMenuBar}>
            <img
              className={styles.arrowIcon}
              loading="lazy"
              alt=""
              src="/curved--chevronsmallright.svg"
            />
          </div>
          <div className={styles.pageTitle}>Product</div>
          <div className={styles.socialMenuBar}>
            <img
              className={styles.arrowIcon}
              loading="lazy"
              alt=""
              src="/curved--chevronsmallright.svg"
            />
          </div>
          <div className={styles.pageTitle3}> {product.title}</div>
        </div>
      </div>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={styles.imageList}>
              <img
                onClick={() => handleImagePicker(product.image)}
                className={`${styles.imageIcon} ${
                  isActive === product.image || isActive === ""
                    ? styles.active
                    : ""
                }`}
                loading="lazy"
                alt=""
                src={product.image}
              />
              <img
                onClick={() => handleImagePicker("/image-11@2x.png")}
                className={`${styles.imageIcon} ${
                  isActive === "/image-11@2x.png" ? styles.active : ""
                }`}
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
              <img
                onClick={() => handleImagePicker("/image-21@2x.png")}
                className={`${styles.imageIcon} ${
                  isActive === "/image-21@2x.png" ? styles.active : ""
                }`}
                loading="lazy"
                alt=""
                src="/image-21@2x.png"
              />
            </div>
            <div className={styles.mainImage}>
              <img
                className={styles.mainimageIcon}
                loading="lazy"
                alt=""
                src={isActive === "" ? product.image : isActive}
              />
            </div>
          </div>
        </div>
        <div className={styles.productDetailCard}>
          <ProductInformation product={product} />
          <div className={styles.horizontalDivider}>
            <img
              className={styles.contentcontainerIcon}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <ProductCheckout product={product} id={id} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
