import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/trafalgar.png";

function Footer() {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row footer-main">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5">
            <img src={FooterLogo} alt="footer logo" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2 mt-5 pt-5">
            <h5>Company</h5>
            <p>
              <a href="http://localhost:3000/">About</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Testimonials</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Find a Doctor</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Apps</a>
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-2 mt-5 pt-5">
            <h5>Region</h5>

            <p>
              <a href="http://localhost:3000/">Indonesia</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Hong Kong</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Singapore</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Canada</a>
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-2 mt-5 pt-5">
            <h5>Help</h5>
            <p>
              <a href="http://localhost:3000/">Help Center</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Contact Support</a>
            </p>
            <p>
              <a href="http://localhost:3000/">How it works</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Instructions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
