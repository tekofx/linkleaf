import * as React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export default function SocialButton(props) {
  return (
    <Button target="_blank" href={props.link}>
      {props.name}
    </Button>
  );
}
