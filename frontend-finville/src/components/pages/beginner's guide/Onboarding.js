import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import BarLoader from "react-spinners/BarLoader";
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
        <div className={style.container}>
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
            {/* <BarLoader
              loading={loading}
              color="#555"
              size={100}
              cssOverride={{
                margin: "20rem auto",
                width: "200px",
              }}
            /> */}

            <ul className={style.flex}>
              {data.map((data) => {
                return (
                  <li key={data.slug} className={style["flex-item"]}>
                    <div className={style["blog-container"]}>
                      <div className={style["image-box"]}>
                        <img src={data.image1} alt="" />
                      </div>
                      <div className={style["text-box"]}>
                        <h3>{data.title}</h3>
                        <p>
                          {data.body.substr(0, 50)}...
                          <Link to={`/beginners-guide/onboarding/${data.id}`}>
                            Continue Reading
                          </Link>
                        </p>
                      </div>
                    </div>

                    {/* <div dangerouslySetInnerHTML={{ __html: data.body }}></div> */}
                  </li>
                );
              })}
            </ul>

            {/* <p className={style.alert}>No post yet. Please Check back later.</p> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Onboarding;
