import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { Card, Icon, Grid, Stack } from "@mui/material";

import Theme from "../theme";

interface AnimatedButtonProps {
  name: string;
  link: string;
  icon: string;
}

export default function AnimatedButton({
  name,
  link,
  icon,
}: AnimatedButtonProps) {
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
        onClick={() => window.open(link)}
        style={styles}
        sx={{
          backgroundColor: styles.bgcolor.animation.to,
          padding: 2,
          width: "70%",
        }}
      >
        <Stack direction={"row"}>
          <Icon className={icon} />
          <b>
            <p style={{ padding: 0, margin: 0 }}>{name}</p>
          </b>
        </Stack>
      </AnimatedCard>
      <br />
    </>
  );
}
