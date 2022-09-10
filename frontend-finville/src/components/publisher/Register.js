import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import axiosInstance from "../axios";
import Header from "./Header";

const theme = createTheme();
const Register = () => {
  let navigate = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    lastName: "",
    firstName: "",
    password: "",
    re_password: "",
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
      .post("/accounts/publisher/signup/", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        re_password: formData.re_password,
        is_publisher: "True",
      })
      .then((res) => {
        if (res.data.success) {
          return navigate("/publisher/login");
        }
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Header />
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
          <Avatar sx={{ m: 1, bgcolor: "#2d459d" }} />
          <Typography variant="h4" component="h1">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange}
                  autoFocus
                  InputLabelProps={{
                    style: {
                      fontSize: "16px",
                    },
                  }}
                  InputProps={{ style: { fontSize: "16px" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  autoComplete="family-name"
                  InputLabelProps={{
                    style: {
                      fontSize: "16px",
                    },
                  }}
                  InputProps={{ style: { fontSize: "16px" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email address"
                  type="email"
                  required
                  fullWidth
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  InputLabelProps={{
                    style: {
                      fontSize: "16px",
                    },
                  }}
                  InputProps={{ style: { fontSize: "16px" } }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  required
                  fullWidth
                  name="password"
                  onChange={handleChange}
                  InputLabelProps={{
                    style: {
                      fontSize: "16px",
                    },
                  }}
                  InputProps={{ style: { fontSize: "1.6rem" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="re_password"
                  label="Confirm Password"
                  type="password"
                  required
                  fullWidth
                  name="re_password"
                  onChange={handleChange}
                  InputLabelProps={{
                    style: {
                      fontSize: "16px",
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end" paddingBottom={4}>
              <Grid item>
                <Typography variant="p" sx={{ fontSize: "1.4rem" }}>
                  Already have an account?
                  <Link to="/publisher/login">Sign in</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Register;
