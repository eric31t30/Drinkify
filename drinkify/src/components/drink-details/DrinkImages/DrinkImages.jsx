import styles from "./drink-images.module.css"
import { useState } from "react";

import { cloudinary } from "../../../utils/Cloudinary";

import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css"
import "swiper/css/effect-fade";

import umbrella from "/illustrations/leaf-border.svg";


function DrinkImages({ drink }) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const gallery = [...drink.images.gallery];

  return (
    <section className={styles.images}>
      <main className={styles.slider}>
        <Swiper
          className={styles["main-image-cont"]}
          modules={[Thumbs, EffectFade, Autoplay]}
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
          resistanceRatio={0}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={500}
        >
          {gallery.map((i, index) => (
            <SwiperSlide className={styles["main-slides"]} key={i}>
              <img
                className={styles["main-images"]}
                src={cloudinary(i, "w_600,h_600,c_fit,f_auto,q_auto:eco")}
                srcSet={`
                  ${cloudinary(i, "w_400,h_400,c_fit,f_auto,q_auto:eco")} 400w,
                  ${cloudinary(i, "w_1000,h_1000,c_fit,f_auto,q_auto:eco")} 600w,
                `}
                sizes="(max-width: 768px) 90vw, 600px"
                alt={`imagen de ${drink.name}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                width="600"
                height="600"
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
          breakpoints={{
            0: {
              direction: "horizontal",
            },
            700: {
              direction: "vertical",
              spaceBetween: 20,
            },
            1024: {
              direction: "horizontal",
            },
          }}
        >
          {gallery.map((i) => (
            <SwiperSlide className={styles["thumbs-slides"]} key={i}>
              <div className={styles["thumb-inner"]}>
                <img
                  className={styles["thumb-image"]}
                  src={cloudinary(i, "w_600,h_600,c_fit,f_auto,q_auto:eco")}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="600"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <img className={styles["umbrella"]} src={umbrella} alt="" />
      </main>
    </section>
  );
}

export default DrinkImages