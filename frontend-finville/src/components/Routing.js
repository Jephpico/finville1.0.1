import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import Home from "./pages/home/Home";
import BeginnersGuide from "./pages/beginner's guide/BeginnersGuide";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Login from "./publisher/Login";
import Register from "./publisher/Register";
import Onboarding from "./pages/beginner's guide/Onboarding";
import CreateContent from "./publisher/CreateContent";
import Dashboard from "./publisher/Dashboard";
import PostDetail from "./publisher/PostDetail";
import Detail from "./pages/beginner's guide/Detail";
import EditPost from "./publisher/EditPost";
const Routing = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/beginners-guide" element={<BeginnersGuide />} />

        <Route path="/beginners-guide/onboarding" element={<Onboarding />} />
        <Route path="/beginners-guide/onboarding/:slug" element={<Detail />} />

        <Route path="/services" element={<Services />} />

        <Route path="/blog" element={<Blog />} />

        {!authCtx.isLoggedIn && (
          <Route path="/publisher/login" element={<Login />} />
        )}

        {!authCtx.isLoggedIn && (
          <Route path="/publisher/register" element={<Register />} />
        )}

        {authCtx.isLoggedIn && (
          <Route path="/publisher/create-post" element={<CreateContent />} />
        )}
        {!authCtx.isLoggedIn && (
          <Route
            path="/publisher/create-post"
            element={<Navigate to="/publisher/login" replace />}
          />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/publisher/edit/:postId" element={<EditPost />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/publisher/dashboard" element={<Dashboard />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/publisher/dashboard/:postId" element={<PostDetail />} />
        )}

        {!authCtx.isLoggedIn && (
          <Route
            path="/publisher/dashboard"
            element={<Navigate to="/publisher/login" replace />}
          />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default Routing;
