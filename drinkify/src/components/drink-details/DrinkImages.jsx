import styles from "../../styles/drink-images.module.css"
import { useState } from "react";

import { cloudinary } from "../../utils/Cloudinary";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css"
import "swiper/css/effect-fade";


function DrinkImages({ drink }) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = ["cosmopolitan_b1nkzd", "daiquiri_l5psis", "aperol-spritz_lnewe7"];

  return (
    <section className={styles.images}>
      <h2 className={styles.title}>
        imag<span style={{ color: drink.color }}>enes</span>
      </h2>
      <main className={styles.slider}>
        <Swiper
          className={styles["main-image-cont"]}
          modules={[Thumbs, EffectFade, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
          resistanceRatio={0}
          effect="fade"
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
          // speed={500}
        >
          {images.map((i) => (
            <SwiperSlide className={styles["main-slides"]} key={i}>
              <img
                className={styles["main-images"]}
                src={cloudinary(i)}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          className={`${styles["thumbs-cont"]} ${styles["thumbs-swiper"]}`}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          watchSlidesProgress
          style={{
            "--thumb-active-color": drink.color,
          }}
        >
          {images.map((i) => (
            <SwiperSlide className={styles["thumbs-slides"]} key={i}>
              <img
                className={styles["thumb-image"]}
                src={cloudinary(i)}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}

export default DrinkImages