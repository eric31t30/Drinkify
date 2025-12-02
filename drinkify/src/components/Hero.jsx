import "../styles/hero.css"

import logo from "/illustrations/drinkify-logo.svg";
import bubbles from "/illustrations/bubbles.svg";
import lemon from "/illustrations/lemon.svg";

function Hero() {

  return (
    <section className="hero">
      <div className="hero-title-cont">
        <img className="hero-title" src={logo} alt="logo de drinkify" />
      </div>

      <div className="hero-waves-cont">
        <svg
          className="hero-wave-1"
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,500 L 0,187 C 117.33333333333331,232.33333333333334 234.66666666666663,277.6666666666667 399,269 C 563.3333333333334,260.3333333333333 774.6666666666667,197.66666666666666 956,175 C 1137.3333333333333,152.33333333333334 1288.6666666666665,169.66666666666669 1440,187 L 1440,500 L 0,500 Z"
            stroke="none"
            strokeWidth="0"
            fill="rgba(8, 201, 244, 1)"
            fillOpacity="1"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>

        <svg
          className="hero-wave-2"
          id="svg"
          viewBox="0 0 1440 590"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,600 L 0,225 C 126.13333333333333,160.6 252.26666666666665,96.19999999999999 397,114 C 541.7333333333333,131.8 705.0666666666666,231.8 882,264 C 1058.9333333333334,296.2 1249.4666666666667,260.6 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="rgba(8, 201, 244, 0.4)"
            fillOpacity="1"
            transform="rotate(-180 720 300)"
          ></path>
        </svg>
      </div>

      <img
        className="hero-bubbles"
        src={bubbles}
        alt=""
        draggable="false"
      />

      <img className="hero-lemon" src={lemon} alt="lemon decoration" />
    </section>
  );
}

export default Hero    