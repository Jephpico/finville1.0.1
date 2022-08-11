import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "html-react-parser";
import axios from "axios";
import style from "./CreateContent.module.css";
const CreateContent = () => {
  // const [data, setData] = useState("");
  // const handleChange = (e, editor) => {n
  //   const data = editor.getData();
  //   setData(ReactHtmlParser(data));
  //   console.log(e, editor);
  // };

  const initialPostData = Object.freeze({
    title: "",
    slug: "",
    thumbnail: "",
    body: "",
    arthor: "",
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
    console.log(postData);
    axios.post("http://127.0.0.1:8000/api/beginners-guide/publisher_board/", {
      title: postData.title,
      slug: postData.slug,
      body: postData.body,
      thumbnail: postData.thumbnail,
      arthor: postData.arthor,
    });
    // .then((res) => {
    //   if (res.data.success) {
    //     console.log(res.data);
    //     alert("Post submitted successfully");
    //   }
    // });
  };
  return (
    <div className={style["form-container"]}>
      <form className={style.form} onSubmit={postSubmitHandler}>
        <div className={style["form-group"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className={style["form-control"]}
            name="title"
            id="title"
            value={postData.title}
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
            value={postData.slug}
            onChange={handlePostChange}
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="slug">Thumbnail</label>
          <input
            type="file"
            className={style["form-control"]}
            name="thumbnail"
            id="thumbnail"
            value={postData.thumbnail}
            onChange={handlePostChange}
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="content">Content</label>
          {/* <CKEditor
            className={style["form-control"]}
            editor={ClassicEditor}
            data={postData.body}
            onChange={(e, editor) => {
              const data = editor.getData();
              setPostData({ ...postData, body: ReactHtmlParser(data) });
            }}
            name="body"
          /> */}
          <input
            type="text"
            className={style["form-control"]}
            name="body"
            id="body"
            value={postData.body}
            onChange={handlePostChange}
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="slug">arthor</label>
          <input
            type="email"
            className={style["form-control"]}
            name="arthor"
            id="arthor"
            value={postData.arthor}
            onChange={handlePostChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateContent;
