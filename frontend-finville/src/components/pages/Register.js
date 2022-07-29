import React from "react";
import { Link } from "react-router-dom";
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

const theme = createTheme();
const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#2d459d" }} />
          <Typography variant="h4" component="h1">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
                  id="username"
                  label="Username"
                  type="text"
                  required
                  fullWidth
                  name="username"
                  autoComplete="username"
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
                  name="new-password"
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
                mt: 3,
                mb: 2,
                bgcolor: "#2d459d",
                fontSize: "1.4rem",
                p: 1,
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
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
