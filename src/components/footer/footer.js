import React from "react";
import "./footer.scss";
import {
  LogoFacebook,
  LogoTwitter,
  LogoInstagram,
} from "@carbon/icons-react";

const Footer = () => (
  <div className="footer">
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col item social">
              <a href="/">
                <LogoFacebook/>
              </a>
              <a href="/">
                <LogoTwitter />
              </a>
              <a href="/">
                <LogoInstagram />
              </a>
            </div>
          </div>
          <p class="copyright">
            {" "}
            <h3>ⓒ Intellectual Property Offerings: Your own IPO</h3>
          </p>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
