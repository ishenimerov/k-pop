import { Box, Fade, Grid, Grow, Typography } from "@mui/material";
import { MemeberItem } from "./member-item";
import { seventeenMembers } from "../../constants/member-list";
import { useInView } from "react-intersection-observer";

export function Members() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      sx={{
        borderRadius: 20,
        transition: "step-start",
        justifyContent: "center",
        mt: 10,
        mb: 10,
      }}
    >
      <Fade in={true} timeout={2000}>
        <Typography
          ref={titleRef}
          component="h1"
          variant="h1"
          sx={{ textAlign: "center", mb: 10 }}
        >
          Members
        </Typography>
      </Fade>
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
        columns={{ xs: 1, sm: 4, md: 12 }}
      >
        {seventeenMembers.map((member, index) => (
          <Grow key={member.name} in={titleInView} timeout={index * 300 + 1000}>
            <Grid item xs={1} sm={2} md={4}>
              <MemeberItem name={member.name} image={member.picture} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
}
