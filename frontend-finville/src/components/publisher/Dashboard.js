import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Axios from "axios";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Delete, Edit } from "@mui/icons-material";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/beginners-guide/publisher_board/", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [token]);
  return (
    <>
      <Header />
      <Container
        maxWidth="md"
        component="main"
        sx={{ mt: "70px", position: "relative" }}
      >
        <Grid container spacing={5} alignItems="flex-end">
          {data.map((post) => {
            return (
              <Grid item key={post.id} xs={12} md={4}>
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="headline"
                        component="h2"
                      >
                        {post.title}
                      </Typography>
                      <Typography component="Lizard">{post.slug}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{
                      display: "flex",

                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button color="primary">Read Details</Button>
                    <Button
                      color="primary"
                      size="small"
                      sx={{ fontSize: "13px" }}
                    >
                      <Edit />
                    </Button>
                    <Button color="error" sx={{ fontSize: "13px" }}>
                      <Delete />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        {/* <Tooltip
          title="Add new post"
          sx={{
            position: "absolute",
            bottom: -90,
            left: { xs: 10, md: -80 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <Link to="/create">
              <Add />
            </Link>
          </Fab>
        </Tooltip> */}
      </Container>
    </>
  );
};

export default Dashboard;
