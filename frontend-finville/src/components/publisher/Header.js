import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Button,
  Link,
} from "@mui/material";

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
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          {isLoggedIn && (
            <Typography variant="h6" color="inherit" noWrap>
              <Link
                component={NavLink}
                to="/publisher/dashboard"
                underline="none"
                color="textPrimary"
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
                underline="none"
                color="textPrimary"
              >
                Create Post
              </Link>
            </Typography>
          )}
          {!isLoggedIn && (
            <nav>
              <Link
                color="textPrimary"
                href="#"
                component={NavLink}
                to="/publisher/register"
              >
                Register
              </Link>
            </nav>
          )}
          {!isLoggedIn && (
            <Button
              href="#"
              color="primary"
              variant="outlined"
              component={NavLink}
              to="/publisher/login"
            >
              Login
            </Button>
          )}
          {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
