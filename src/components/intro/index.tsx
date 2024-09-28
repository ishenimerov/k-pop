import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import YouTube from "react-youtube";

export function Intro() {
  const videoId = "rOK790-wRhk"; // The ID of the video
  const startTime = 11; // Start time in seconds
  const endTime = 35; // End time in seconds

  const playerRef = useRef(null);

  const handleReady = (event: { target: any }) => {
    // When the player is ready, set up an interval to check the current time
    const player = event.target;
    playerRef.current = player;
    setInterval(() => {
      if (player.getCurrentTime() >= endTime) {
        player.seekTo(startTime);
      }
    }, 1000); // Check every second
  };

  // YouTube player options
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
      mute: 1,
      start: startTime,
      end: endTime,
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          "& iframe": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "100vh",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover", // Ensures the video covers the area
            pointerEvents: "none",
          },
        }}
      >
        <YouTube videoId={videoId} opts={opts} onReady={handleReady} />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Welcome to SEVENTEEN
        </Typography>
      </Box>
    </Box>
  );
}
