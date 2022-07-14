import React from "react";
import classes from "./BlogHome.module.css";
const BlogHome = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Blog</h2>
        <div className={classes.flex}>
          <div className={classes.left}>
            <h3>Market Update</h3>
            <p>Get the latest update across all the financial market</p>
          </div>
          <div className={classes.right}>
            <h3>Market Editorial</h3>
            <p>
              Let about the various financial market concepts from the
              fundamental even to the trending concepts.
            </p>
          </div>
        </div>
        <button className={classes.btn}>Visit Blog</button>
      </div>
    </section>
  );
};

export default BlogHome;
