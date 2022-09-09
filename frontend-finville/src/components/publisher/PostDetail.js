import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import Axios from "axios";
import AuthContext from "../../store/auth-context";

const PostDetail = () => {
  const [data, setData] = useState([]);
  const { postId } = useParams();
  // const post = data.find((data)=>data.title === postId)
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/beginners-guide/publisher_board/ `, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // .catch((err) => console.log(err));
  }, [token, postId]);

  return (
    <>
      <Header />
      <div>PostDetails</div>
      {/* <p>{data.title}</p>
      <p>{data.body}</p> */}
    </>
  );
};
export default PostDetail;
