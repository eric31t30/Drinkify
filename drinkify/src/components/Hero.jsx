import "../styles/hero.css"

import logo from "/illustrations/drinkify-logo.svg";

import bubbles from "/illustrations/bubbles.svg";
import cocktail1 from "/illustrations/cocktail-1.svg";

import leaf1 from "/illustrations/leafs-3.svg";
import leaf2 from "/illustrations/leafs-2.svg";
import lemon from "/illustrations/lemon.svg";

import scroll from "/icons/scroll.svg"


function Hero() {

  return (
    <section className="hero">
      <div className="hero-title-cont">
        <div className="hero-title-text">
          <img className="hero-title" src={logo} alt="logo de drinkify" />
          <p className="hero-slogan">
            Encuentra el trago perfecto para cada momento.
          </p>
        </div>

        <img className="scroll" src={scroll} alt="" />
      </div>

      <img className="leaf-1" src={leaf1} alt="" />
      <img className="leaf-2" src={leaf2} alt="" />
      <img className="cocktail-1" src={cocktail1} alt="" />
      <img className="bubbles" src={bubbles} alt="" />
      <img className="lemon" src={lemon} alt="" />

      <svg
        className="hero-wave-1"
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
          fill="rgba(255, 255, 255, 1)"
          fillOpacity="1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </section>
  );
}

export default Hero  