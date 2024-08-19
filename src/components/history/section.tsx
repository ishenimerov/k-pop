import { Fade, Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

export function Section(props: {
  section: { year: string; title: string; content: string };
  index: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Fade
      key={props.section.year}
      in={inView}
      timeout={(props.index + 1) * 500}
    >
      <Box ref={ref} sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {props.section.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {props.section.content}
        </Typography>
      </Box>
    </Fade>
  );
}
