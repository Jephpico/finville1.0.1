import React, { useState, useEffect } from "react";
import Axios from "axios";
import icon2 from "../../../assets/Rectangle 50.png";
import style from "./Onboarding.module.css";

const Onboarding = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/beginners-guide/onboarding/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <main className={style.main}>
        <div className={style["title-container"]}>
          <div className={style.title}>
            <h2>Onboarding</h2>
            <p>
              Detailed Walkthrough for various financial products & services
            </p>
          </div>
          <div className={style["title-icon"]}>
            <img src={icon2} alt="" />
          </div>
        </div>
        <div className={style["search-container"]}></div>
        <div className={style["content-container"]}>
          <ul className={style.flex}>
            {data.map((data) => {
              return (
                <li key={data.id} className={style["flex-item"]}>
                  <img src={data.thumbnail} alt="" />
                  <h3>{data.title}</h3>
                  <p>{data.slug}</p>
                  <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Onboarding;
