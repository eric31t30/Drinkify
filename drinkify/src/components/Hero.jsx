import "../styles/hero.css"

function Hero() {

  return (
    <section className="hero">
      <svg
        className="hero-wave"
        viewBox="0 0 900 292"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(78, 218, 242, 1)" />
            <stop offset="100%" stopColor="rgba(247, 141, 167, 1)" />
          </linearGradient>
        </defs>

        <path
          className="hero-wave"
          d="M0 291L30 292.3C60 293.7 120 296.3 180 282.3C240 268.3 300 237.7 360 228.2C420 218.7 480 230.3 540 227.3C600 224.3 660 206.7 720 197.8C780 189 840 189 870 189H900V0H870C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0H0V291Z"
          fill="url(#waveGradient)"
        />
      </svg>

      <div className="hero-title-cont">
        <h1 className="hero-title">Drinkify</h1>
      </div>

      <span className="hero-circle hero-circle-1"></span>
      <span className="hero-circle hero-circle-2"></span>
      <span className="hero-circle hero-circle-3"></span>
    </section>
  );
}

export default Hero