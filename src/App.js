import "./App.css";
import SocialButton from "./components/Button";
import {
  Container,
  Typography,
  ThemeProvider,
  Grid,
  Avatar,
} from "@mui/material";
import AnimatedCard from "./components/AnimatedButton";
import data from "./data.json";
import theme from "./Theme";
import { Icon } from "@mui/material";
import { loadCSS } from "fg-loadcss";
import React from "react";

function App() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Grid align="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Avatar src={data.avatar} sx={{ width: 150, height: "auto" }} />
          </Grid>
          <Grid align="center" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="username">{data.username}</Typography>
          </Grid>
          <Grid align="center" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="description">{data.description}</Typography>
          </Grid>

          <br />
          {data.links.map((link) => (
            <Grid align="center" xs={12} sm={6} md={6} lg={4}>
              <AnimatedCard
                name={link.name}
                link={link.link}
                icon={link.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
