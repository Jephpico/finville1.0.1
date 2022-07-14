import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.left}>
        <div className={style.disclaimer}>
          <h3>Disclaimer!!!</h3>
          <p>
            Finville is not liable for losses incurred from using third party
            services available in some section of our platform. <br />
            Also when dealing with financial market, products and services, do
            ensure to only deposit what you can afford to lose.
          </p>
        </div>
        <div className={style.copyright}>
          <p>All copyright reserved &copy; Finville 2022</p>
        </div>
      </div>
      <div className={style.socials}>
        <h4>Socials</h4>
        <div className={style["social-icons"]}>
          <i class="fa fa-facebook-official"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
