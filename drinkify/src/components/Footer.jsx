import '../styles/footer.css'


import umbrella2 from "/illustrations/umbrella.svg";
import logo from '/illustrations/drinkify-logo.svg'
import bubbles from "/illustrations/bubbles.svg";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-umbrella" src={umbrella2} alt="" />

      <div className="footer-waves-cont">
        <svg
          className="footer-wave footer-wave-2"
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,600 L 0,225 C 136,229.89285714285714 272,234.78571428571428 374,217 C 476,199.21428571428572 543.9999999999999,158.75 660,142 C 776.0000000000001,125.25 940,132.21428571428572 1078,150 C 1216,167.78571428571428 1328,196.39285714285714 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="rgba(8, 201, 244, 0.4)"
            fillOpacity="1"
          ></path>
        </svg>
        <svg
          className="footer-wave footer-wave-1"
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,600 L 0,225 C 182,232.73333333333332 364,240.46666666666664 523,258 C 682,275.53333333333336 818,302.8666666666667 967,299 C 1116,295.1333333333333 1278,260.06666666666666 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            strokeWidth="0"
            fill="rgba(8, 201, 244, 1)"
            fillOpacity="1"
          ></path>
        </svg>
      </div>

      <div className="footer-cont">
        <img className="footer-logo" src={logo} alt="" />

        <img className="footer-bubbles" src={bubbles} alt="" />
        <p className="footer-copyright">© 2025 Eric — Drinkify</p>
      </div>
    </footer>
  );
}

export default Footer