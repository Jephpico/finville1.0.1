import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  useEffect(() => {
    setLoading(true);
    Axios.get(
      `http://127.0.0.1:8000/api/beginners-guide/onboarding/${slug}/`
    ).then((res) => setData(res.data));
    setLoading(false);
    // .catch((err) => console.log(err));
  }, [slug]);

  return (
    <>
      {loading && <p style={{ padding: "20rem 0" }}>Loading...</p>}
      {!loading && (
        <div className={style.container}>
          <h2 className={style.title}>{data.title}</h2>
          <p className={style.description}>{data.body}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
