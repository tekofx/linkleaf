import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { Card, Icon, Grid } from "@mui/material";

import Theme from "../Theme";

export default function AnimatedCard(props) {
  const [state, toggle] = useState(true);
  const AnimatedCard = animated(Card);

  const styles = useSpring({
    loop: false,
    from: { scale: 1, color: "white", bgcolor: Theme.palette.background.paper },
    to: {
      scale: state ? 1 : 1.05,
      color: state ? "white" : "black",
      bgcolor: state ? "white" : Theme.palette.background.paper,
    },
    config: { duration: 200 },
  });

  return (
    <>
      <AnimatedCard
        onMouseEnter={() => toggle(!state)}
        onMouseLeave={() => toggle(!state)}
        onClick={() => window.open(props.link)}
        style={styles}
        sx={{
          bgcolor: styles.bgcolor.animation.to,
          padding: 2,
          width: "70%",
        }}
      >
        <Grid container spacing={6}>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Icon className={props.icon} />
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <b>
              <p style={{ padding: 0, margin: 0 }}>{props.name}</p>
            </b>
          </Grid>
        </Grid>
      </AnimatedCard>
      <br />
    </>
  );
}
