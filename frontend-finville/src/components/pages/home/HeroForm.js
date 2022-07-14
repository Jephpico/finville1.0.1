import React from "react";
import classes from "./HeroForm.module.css";

const HeroForm = () => {
  return (
    <div className={classes["hero-form-container"]}>
      <h3>Get the most from financial markets, fintech products & services</h3>
      <form>
        <input
          className={classes.input}
          type="email"
          placeholder="Enter your email address"
          name="email"
        />
        <button className={classes.btn}>Sign Up</button>
      </form>
    </div>
  );
};

export default HeroForm;
