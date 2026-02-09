import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src="./foter.png"
        alt="Header banner featuring bags catalog branding and navigation elements"
        width="100%"
      />

      <div>
        <div className="content-footer">
          <img src="./wats.png" alt="" />
                    <a
            className="whatsapp-button"
            href="https://wa.me/+966503863911"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="button"
              src="/buttonF.png"
              alt="WhatsApp contact button"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
