import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import swal from "sweetalert";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/beginners-guide/publisher_board/`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      const data = res.data;
      setData(data);
    });

    // .catch((err) => console.log(err));
  }, [token]);

  const handleDelete = (id) => {
    Axios.delete(
      `http://127.0.0.1:8000/api/beginners-guide/publisher_board/${id}/`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => {
      setData(data.filter((item) => item.id !== id));
    });
  };

  return (
    <>
      <Header />
      <div className={style.container}>
        <ul className={style.flex}>
          {data.map((data) => {
            return (
              <li key={data.id} className={style["flex-item"]}>
                <div className={style["blog-container"]}>
                  <div className={style["image-box"]}>
                    <img src={data.image1} alt="" />
                  </div>
                  <div className={style["text-box"]}>
                    <h3>{data.title}</h3>
                    <p>
                      {data.body.substr(0, 50)}...
                      <Link to={`/publisher/dashboard/${data.id}`}>
                        Read More
                      </Link>
                    </p>
                  </div>
                  <div className={style.ctn}>
                    <FiEdit size={16} color="green" />
                    <MdDeleteOutline
                      onClick={() => handleDelete(data.id)}
                      size={24}
                      color="red"
                    />
                  </div>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: data.body }}></div> */}
              </li>
            );
          })}
        </ul>
      </div>
      {data.length < 1 && <p>No posts yet. Please check back</p>}
    </>
  );
};

export default Dashboard;
