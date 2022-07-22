import "./App.css";
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
import { loadCSS } from "fg-loadcss";
import React from "react";
import GithubCorner from "react-github-corner";
import LinkIcon from "@mui/icons-material/Link";
import av from "./avatar.jpg";
function App() {
  // Set background
  if (data.backgroundColor) {
    document.body.style.backgroundColor = data.backgroundColor;
  } else {
    document.body.style.backgroundImage = "url('./background.jpg')";
  }

  // Set title
  document.title = data.username + " - LinkLeaf";

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
      <GithubCorner href="https://github.com/tekofx/linkleaf" target="_blank" />
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Grid align="center" item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Avatar src={av} sx={{ width: 150, height: "auto" }} />
          </Grid>
          <Grid
            align="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ marginBottom: 1 }}
          >
            <Typography variant="username">{data.username}</Typography>
          </Grid>
          <Grid
            align="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ marginBottom: 1 }}
          >
            <Typography variant="description">{data.description}</Typography>
          </Grid>

          <Grid
            align="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              marginBottom: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href={data.web}>
              <LinkIcon />
            </a>
            <a href={data.web}>
              <Typography variant="web">{data.web}</Typography>
            </a>
          </Grid>
          <Grid>
            <br />
          </Grid>

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
