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
import { LockOpen } from "@mui/icons-material";
// import { makeStyles } from "@mui/styles";

// const styles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//   },
// }));
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
                  id="username"
                  label="Username"
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
                mt: 6,
                mb: 2,
                bgcolor: "#2d459d",
                fontSize: "1.4rem",
                p: 1,
              }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {" "}
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
export default Register;
