import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import {
  Avatar,
  CssBaseline,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import { LockOpen } from "@mui/icons-material";

const theme = createTheme();
const Login = () => {
  let navigate = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosInstance
      .post("/token/", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          `JWT ` + localStorage.getItem("access_token");
        return navigate("/create");
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
        sx={{ boxShadow: "0 0 5px rgba(0,0,0,0.15)", borderRadius: "4px" }}
      >
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#2d459d" }}>
            <LockOpen />
          </Avatar>

          <Typography variant="h4" component="h1">
            Sign In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email Address"
                  required
                  fullWidth
                  onChange={handleChange}
                  name="email"
                  autoComplete="email"
                  InputLabelProps={{
                    style: {
                      fontSize: "1.6rem",
                    },
                  }}
                  InputProps={{ style: { fontSize: "1.6rem" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  required
                  fullWidth
                  onChange={handleChange}
                  name="password"
                  InputLabelProps={{
                    style: {
                      fontSize: "1.6rem",
                    },
                  }}
                  InputProps={{ style: { fontSize: "1.6rem" } }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 5,
                mb: 2,
                bgcolor: "#2d459d",
                fontSize: "1.4rem",
                p: 1,
              }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end" paddingBottom={4}>
              <Grid item>
                <Typography variant="p" sx={{ fontSize: "1.4rem" }}>
                  Don't have an account yet?
                  <Link to="/publisher/register">Sign up</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
