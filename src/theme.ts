import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#0099b2",
    },
    secondary: {
      main: "#edf069",
    },
    background: {
      paper: "#28272a",
    },
    error: {
      main: "#f0a19c",
    },
    info: {
      main: "#259bf9",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
  typography: {
    fontFamily: ['"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial"].join(","),

    username: {
      fontSize: "2rem",
      color: "#fff",
      paddingBottom: "0.5rem",
      paddingTop: "0.5rem",
    },
    description: {
      color: "#fff",
      fontSize: "1rem",
      textAlign: "justify",
      paddingBottom: "0.2rem",
    },
    web: {
      color: "#fff",

      fontStyle: "italic",
      fontSize: "1rem",
      textAlign: "justify",
    },
  },
});

/* These atrributes overrides the top attributes*/
Theme.typography.username = {
  fontSize: "2rem",
  color: "#fff",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
  //textAlign: "center",

  [Theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    paddingBottom: "1rem",
    paddingTop: "1rem",
  },
};
Theme.typography.description = {
  color: "#fff",

  fontSize: "1rem",
  textAlign: "justify",
  paddingBottom: "0.2rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "1rem",
    paddingBottom: "0.1rem",
  },
};
Theme.typography.web = {
  color: "#fff",

  fontStyle: "italic",
  fontSize: "1rem",
  textAlign: "justify",

  [Theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

//Theme = responsiveFontSizes(Theme);

declare module "@mui/material/styles" {
  interface TypographyVariants {
    username: React.CSSProperties;
    description: React.CSSProperties;
    web: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    username?: React.CSSProperties;
    description: React.CSSProperties;
    web: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    username: true;
    description: true;
    web: true;
    h3: false;
  }
}
export default Theme;
