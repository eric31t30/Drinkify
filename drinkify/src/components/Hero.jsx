import "../styles/hero.css"

import logo from "/illustrations/drinkify-logo.svg";
import bubbles from "/illustrations/bubbles.svg";
import lemon from "/illustrations/lemon.svg";

function Hero() {

  return (
    <section className="hero">
      <div className="hero-title-cont">
        <img className="hero-title" src={logo} alt="logo" />
      </div>

      <div className="hero-waves-cont">
        <svg
          className="hero-wave-1"
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
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
        alt="bubbles-decoration"
        draggable="false"
      />


      <img className="hero-lemon" src={lemon} alt="lemon decoration" />
      
    </section>
  );
}

export default Hero


{/* <svg
        className="hero-wave"
        viewBox="0 0 900 292"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(38, 240, 180, 1)" />
            <stop offset="70%" stopColor="rgba(64, 197, 197, 1)" />
          </linearGradient>
        </defs>

        <path
          className="hero-wave"
          d="M0 291L30 292.3C60 293.7 120 296.3 180 282.3C240 268.3 300 237.7 360 228.2C420 218.7 480 230.3 540 227.3C600 224.3 660 206.7 720 197.8C780 189 840 189 870 189H900V0H870C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0H0V291Z"
          fill="url(#waveGradient)"
        />
      </svg> */}

      
      
      