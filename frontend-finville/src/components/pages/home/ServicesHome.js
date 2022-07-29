import React from "react";
import Card from "../../UI/Card";
import service from "../../../assets/service.svg";
import onboard from "../../../assets/blog.svg";

import classes from "./ServicesHome.module.css";

const ServicesHome = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Services</h2>
        <Card className={classes.left}>
          <div className={classes["image-box"]}>
            <img src={service} alt="service" />
          </div>
          <div className={classes["text-box"]}>
            <h3>Trader</h3>
            <span className={classes.span}>
              We offer Trading-as-a-service across various financial markets
            </span>
            <p>
              With our Trader tool, you don't need to deal with the hassle
              associated with trading. We have an array of third party vendors
              with profitable trading experience
            </p>
            <button className={classes.btn}>Get Started</button>
          </div>
        </Card>
        <Card className={classes.right}>
          <div className={classes["text-box"]}>
            <h3>Onboarder</h3>
            <span className={classes.span}>
              We offer Onboarding-as-a-service across various financial markets
            </span>
            <p>
              With our Onboarder tool, navigating and effectively utilizing
              fintech and financial market products for newbies just got easier.
            </p>
            <button className={classes.btn}>Explore Now</button>
          </div>
          <div className={classes["image-box"]}>
            <img src={onboard} alt="onboard" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesHome;
