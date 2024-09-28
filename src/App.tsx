import { Box } from "@mui/material";
import { Intro } from "./components/intro";
import { Members } from "./components/intro/members";
import { Albums } from "./components/albums";
import { History } from "./components/history";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Intro />
      <Members />
      <Albums />
      <History />
    </Box>
  );
}

export default App;
