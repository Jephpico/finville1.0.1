import React from "react";
import classes from "./BeginnersLanding.module.css";
import icon1 from "../../../assets/Rectangle 22.png";
import icon2 from "../../../assets/Rectangle 50.png";
import icon3 from "../../../assets/Rectangle 52.png";
import icon4 from "../../../assets/Rectangle 137.png";

const BeginnersLanding = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Beginner's Guide</h2>
        <div className={classes.flex}>
          <div className={classes.left}>
            <div className={classes.features}>
              <p className={classes.feat1}>Financial Market 101</p>
              <p className={classes.feat2}>Onboarder</p>
              <p className={classes.feat3}>Trading & Investing</p>
              <p className={classes.feat4}>Personal & Business finance</p>
            </div>
          </div>
          <div className={classes.right}>
            <p className={classes.desc}>
              As newbies,navigating through various financial terrains come with
              a soreness for newbies.
            </p>
            <div className={classes["icon-container"]}>
              <img src={icon4} alt="" />
              <img src={icon2} alt="" />
              <img src={icon1} alt="" />
              <img src={icon3} alt="" />
            </div>
            <p>
              Beginner's guide is a simplistic guide, carefully curated to ease
              the learning hassle of Newbies across various financial terrain.
            </p>
            <button className={classes.btn}>Get Started &rarr;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginnersLanding;
