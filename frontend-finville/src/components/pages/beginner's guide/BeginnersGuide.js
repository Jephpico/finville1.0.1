import React from "react";
import style from "./BeginnersGuide.module.css";

const BeginnersGuide = () => {
  return (
    <main className={style.main}>
      <div className={style.heading}>
        <h2>Welcome to Beginner's guide</h2>
        <p>A simple guide for financial market participants</p>
      </div>
      <div className={style["button-container"]}>
        <button className={style.firstBox}>
          <h3>Financial Market 101</h3>
          <p>Learn the basic rudiments of trading and investing</p>
        </button>
        <button className={style.secondBox}>
          <h3>Onboarding</h3>
          <p>
            Seamlessly get onboard products and services within the finanical
            world
          </p>
        </button>
        <button className={style.thirdBox}>
          <h3>Personal & Business Finance</h3>
          <p>Learn the basic concept around Personal and Business finance</p>
        </button>
        <button className={style.fourthBox}>
          <h3>Trading & Investing</h3>
          <p>Learn the basic rudiments of trading and investing</p>
        </button>
      </div>
    </main>
  );
};

export default BeginnersGuide;
