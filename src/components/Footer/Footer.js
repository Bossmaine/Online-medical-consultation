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
              <a href="https://dapper-syrniki-79881d.netlify.app/">About</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Testimonials</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Find a Doctor</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Apps</a>
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-2 mt-5 pt-5">
            <h5>Region</h5>

            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Indonesia</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Hong Kong</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Singapore</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Canada</a>
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-2 mt-5 pt-5">
            <h5>Help</h5>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Help Center</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Contact Support</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">How it works</a>
            </p>
            <p>
              <a href="https://dapper-syrniki-79881d.netlify.app/">Instructions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
