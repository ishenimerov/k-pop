import { Box, Button, Fade, Grid, Grow, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { albums } from "../../constants/albums";

export function Albums() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      sx={{
        borderRadius: 20,
        transition: "step-start",
        mb: 20,
      }}
    >
      <Fade in={true} timeout={2000}>
        <Typography
          ref={titleRef}
          component="h1"
          variant="h1"
          sx={{ textAlign: "center", mb: 10 }}
        >
          Albums
        </Typography>
      </Fade>
      <Grid
        container
        spacing={{ xs: 4, md: 5 }}
        columns={{ xs: 1, sm: 4, md: 12 }}
      >
        {albums.mini_albums.map((album, index) => (
          <Grow key={album.title} in={titleInView} timeout={index * 300 + 1000}>
            <Grid item xs={1} sm={2} md={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/playlist?list=OLAK5uy_m7wRFgnHXpDKPsuhxkrP73iclT8HB9Vdg",
                    "_blank"
                  )
                }
                sx={{
                  textTransform: "none",
                  display: "block",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <Typography variant="h6">{album.title}</Typography>
              </Button>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
}
