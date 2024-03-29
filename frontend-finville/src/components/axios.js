import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (typeof error.response === "undefined") {
//       alert("CORS error");
//       return Promise.reject(error);
//     }
//     if (
//       error.response.status === 401 &&
//       originalRequest.url === baseURL + "token/refresh/"
//     ) {
//       window.location.href = "/login";
//       return Promise.reject(error);
//     }
//     if (
//       error.response.data.code === "token_not_valid" &&
//       error.response.status === 401 &&
//       error.response.statusText === "Unauthorized"
//     ) {
//       const refreshToken = localStorage.getItem("refresh_token");
//       if (refreshToken) {
//         const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
//         const nowDate = Math.ceil(Date.now() / 1000);
//         alert(tokenParts.exp);
//         if (tokenParts.exp > nowDate) {
//           return axiosInstance
//             .post("/token/refresh/", { refresh: refreshToken })
//             .then((response) => {
//               localStorage.setItem("access_token", response.data.access);
//               localStorage.setItem("refresh_token", response.data.refresh);

//               axiosInstance.defaults.headers["Authorization"] =
//                 "JWT " + response.data.access;
//               originalRequest.headers["Authorization"] =
//                 "JWT " + response.data.access;

//               return axiosInstance(originalRequest);
//             })
//             .catch((err) => {
//               alert(err);
//             });
//         } else {
//           window.location.href = "/login";
//         }
//       } else {
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
