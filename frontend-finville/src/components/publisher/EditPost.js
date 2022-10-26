import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import swal from "sweetalert";

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Axios from "axios";
import style from "./CreateContent.module.css";
import Header from "./Header";
const EditPost = () => {
  // const [data, setData] = useState([]);
  const { postId } = useParams();
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  let navigate = useNavigate();
  const initialPostData = Object.freeze({
    title: "",
    slug: "",
    body: "",
  });
  const [postData, setPostData] = useState(initialPostData);

  const handlePostChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value.trim(),
    });
  };
  const postSubmitHandler = (e) => {
    e.preventDefault();
    const postedData = {
      title: postData.title,
      slug: postData.slug,
      body: postData.body,
    };
    console.log(postData);
    const header = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    Axios.post(
      "http://127.0.0.1:8000/api/beginners-guide/publisher_board/",
      postedData,
      header
    ).then((res) => {
      console.log(res);
      swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Ok",
      });
      setPostData(initialPostData);
      return navigate("/publisher/dashboard");
    });
  };
  return (
    <>
      <Header />
      <div className={style["form-container"]}>
        <form className={style.form} onSubmit={postSubmitHandler}>
          <div className={style["form-group"]}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className={style["form-control"]}
              name="title"
              id="title"
              onChange={handlePostChange}
            />
          </div>
          <div className={style["form-group"]}>
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              className={style["form-control"]}
              name="slug"
              id="slug"
              onChange={handlePostChange}
            />
          </div>
          <div className={style["form-group"]}>
            <label htmlFor="content">Content</label>
            {/* <CKEditor
              className={style["form-control"]}
              name="body"
              editor={ClassicEditor}
              data={postData.body}
              onChange={(e, editor) => {
                const data = editor.getData();
                setPostData({ ...postData, body: data });
              }}
            /> */}
            <input
              type="text"
              className={style["form-control"]}
              name="body"
              id="body"
              onChange={handlePostChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default EditPost;
