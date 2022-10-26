import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
import style from "./PostDetail.module.css";

const PostDetail = () => {
  const [data, setData] = useState([]);
  const { postId } = useParams();
  // const post = data.find((data) => data.id === postId);

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    Axios.get(
      `http://127.0.0.1:8000/api/beginners-guide/publisher_board/${postId}/`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => setData(res.data));

    // .catch((err) => console.log(err));
  }, [token, postId]);

  return (
    <>
      <Header />
      <div className={style.container}>
        <h2 className={style.title}>{data.title}</h2>
        <p className={style.description}>{data.body}</p>
      </div>
    </>
  );
};
export default PostDetail;
