import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";
import CarouselSlider from "./CarouselSlider";

export default function Carousel({ slides }) {
  const OPTIONS = { loop: true };
  console.log(slides, "slides");
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  //buttons logic
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const ButtonOnSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    ButtonOnSelect(emblaApi);
    emblaApi.on("reInit", ButtonOnSelect);
    emblaApi.on("select", ButtonOnSelect);
  }, [emblaApi, ButtonOnSelect]);

  //dots logic
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);
  console.log(scrollSnaps, "sssssdddaayy");
  const DotOnSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    DotOnSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", DotOnSelect);
    emblaApi.on("select", DotOnSelect);
  }, [emblaApi, onInit, DotOnSelect]);
  const mmm = slides || [];
  return (
    <section className={styles.dotListDotDot}>
      <div className={styles.mouseAdsParent + " " + styles.embla}>
        <div className={styles.mouseAds + " " + styles.embla__viewport}>
          <div className={styles.textButton} ref={emblaRef}>
            <div className={styles.embla__container}>
              {slides?.map(({ id }) => (
                <div className={styles.embla__slide} key={id}>
                  <CarouselSlider className={styles.embla__slide__number} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.leftArrow} onClick={onPrevButtonClick}>
            <img
              disabled={prevBtnDisabled}
              className={styles.shapeIcon}
              loading="lazy"
              alt=""
              src="/Left Arrow.svg"
            />
          </div>
          <div className={styles.rightArrow} onClick={onNextButtonClick}>
            <img
              disabled={nextBtnDisabled}
              className={styles.shapeIcon1}
              alt=""
              src="/Right Arrow.svg"
            />
          </div>
        </div>
        <div className={styles.dotListWrapper}>
          <div className={styles.dotList}>
            {scrollSnaps.map((_, index) => (
              <div
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={index === selectedIndex ? styles.dot : styles.dot1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
