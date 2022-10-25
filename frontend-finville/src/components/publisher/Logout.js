import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import Header from "./Header";

const Logout = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const response = axiosInstance.post("/accounts/logout/token/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    navigate("/publisher/login");
    console.log(response);
  });
  return <div>Logout</div>;
};
export default Logout;
