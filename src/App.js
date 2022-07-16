import "./App.css";
import SocialButton from "./components/Button";
import { Container, Typography, ThemeProvider, Grid } from "@mui/material";
import data from "./data.json";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="username">{data.username}</Typography>
        <br />
        <Grid container spacing={3}>
          {data.links.map((link) => (
            <Grid item xs={12} sm={12} md={12} lg={12} key={link.name}>
              <SocialButton key={link.name} name={link.name} link={link.link} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
