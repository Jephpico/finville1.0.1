import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { AppBar, Toolbar, Typography, CssBaseline, Link } from "@mui/material";

import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    return navigate("/publisher/login");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#2d459d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar>
          {isLoggedIn && (
            <Typography variant="h6" color="inherit" noWrap>
              <Link
                component={NavLink}
                to="/publisher/dashboard"
                sx={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  cursor: "pointer",
                  marginRight: "1.6rem",
                  textDecoration: "none",
                }}
              >
                All Posts
              </Link>
            </Typography>
          )}
          {isLoggedIn && (
            <Typography variant="h6" color="inherit" noWrap>
              <Link
                component={NavLink}
                to="/publisher/create-post"
                sx={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  cursor: "pointer",
                  marginRight: "1.6rem",
                  textDecoration: "none",
                }}
              >
                Create Post
              </Link>
            </Typography>
          )}
          {!isLoggedIn && (
            <nav>
              <Link
                // sx={{ color: "#fff", fontSize: "2rem" }}
                component={NavLink}
                to="/publisher/register"
                sx={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  cursor: "pointer",
                  marginRight: "1.6rem",
                  textDecoration: "none",
                }}
              >
                Register
              </Link>
            </nav>
          )}
          {!isLoggedIn && (
            <nav>
              <Link // sx={{ color: "#fff", fontSize: "1.6rem" }}
                component={NavLink}
                to="/publisher/login"
                sx={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  cursor: "pointer",
                  marginRight: "1.6rem",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </nav>
          )}
          {isLoggedIn && (
            <button
              onClick={logoutHandler}
              style={{
                backgroundColor: "red",
                border: "none",
                fontSize: "1.4rem",
                padding: "0.6rem",
                color: "#fff",
                borderRadius: "3px",
              }}
            >
              Logout
            </button>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
