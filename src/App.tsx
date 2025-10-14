import "./App.css";
import av from "./avatar.jpg";
import {
  Container,
  Typography,
  ThemeProvider,
  Grid,
  Avatar,
  Stack,
} from "@mui/material";
import data from "./data.json";
import GithubCorner from "react-github-corner";
import LinkIcon from "@mui/icons-material/Link";
import Theme from "./theme";
import AnimatedButton from "./components/AnimatedButton";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GithubCorner href="https://github.com/tekofx/linkleaf" target="_blank" />
      <Container maxWidth="lg">
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={av} sx={{ width: 150, height: "auto" }} />
          <Typography variant="username">{data.username}</Typography>
          <Typography variant="description">{data.description}</Typography>

          <a href={data.web}>
            <LinkIcon />
          </a>
          <a href={data.web}>
            <Typography variant="web">{data.web}</Typography>
          </a>
          <Grid container spacing={2}>
            {data.links.map((link) => (
              <Grid
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
              >
                <AnimatedButton
                  name={link.name}
                  link={link.link}
                  icon={link.icon}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
