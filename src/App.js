import "./App.css";
import SocialButton from "./components/Button";
import {
  Container,
  Typography,
  ThemeProvider,
  Grid,
  Avatar,
} from "@mui/material";
import data from "./data.json";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
          <Avatar
            src={data.avatar}
            variant="logo"
            sx={{ width: 200, height: "auto" }}
          />
          <Typography variant="username">{data.username}</Typography>
          <Typography variant="description">{data.description}</Typography>

          <br />
          {data.links.map((link) => (
            <SocialButton key={link.name} name={link.name} link={link.link} />
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
