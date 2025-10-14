import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { Card, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const [hovered, setHovered] = useState(true);
  const AnimatedCard = animated(Card);

  const props = useSpring({
    scale: hovered ? 1 : 1.05,
    backgroundColor: hovered ? Theme.palette.background.paper : "white",
    config: { duration: 200 },
    color: hovered ? "white" : "black",
  });

  return (
    <>
      <AnimatedCard
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
        onClick={() => window.open(link)}
        style={props}
        sx={{
          padding: 2,
          width: "70%",
        }}
      >
        <Stack
          spacing={2}
          direction={"row"}
          sx={{
            alignItems: "center",
          }}
        >
          {/*@ts-expect-error: It accepts string but lints anyway*/}
          <FontAwesomeIcon icon={icon} style={{ fontSize: "2em" }} />
          <b>
            <p style={{ padding: 0, margin: 0 }}>{name}</p>
          </b>
        </Stack>
      </AnimatedCard>
      <br />
    </>
  );
}
