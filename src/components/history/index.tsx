import { Box, Typography, Divider } from "@mui/material";
import { Section } from "./section";
import { history } from "../../constants/history";

export function History() {
  return (
    <Box
      sx={{
        justifyContent: "center",
        px: 2,
      }}
    >
      <Typography
        component="h1"
        variant="h1"
        sx={{ textAlign: "center", mb: 10 }}
      >
        History
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {history.map((section, index) => (
        <Section section={section} index={index} />
      ))}
    </Box>
  );
}
