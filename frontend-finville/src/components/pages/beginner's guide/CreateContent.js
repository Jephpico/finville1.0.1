import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "html-react-parser";

import style from "./CreateContent.module.css";
const CreateContent = () => {
  const [data, setData] = useState("");
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setData(ReactHtmlParser(data));
  };
  return (
    <div className={style["form-container"]}>
      <form className={style.form}>
        <div className={style["form-group"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className={style["form-control"]}
            name="title"
            id="title"
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            className={style["form-control"]}
            name="slug"
            id="slug"
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="content">Content</label>
          <CKEditor
            className={style["form-control"]}
            editor={ClassicEditor}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{data}</div>
    </div>
  );
};

export default CreateContent;
