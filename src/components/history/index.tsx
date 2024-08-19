import { Box, Typography, Divider } from "@mui/material";
import { Section } from "./section";
import { history } from "../../constants/history";

export function History() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: 2,
        p: 4,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <Typography
        component="h1"
        variant="h1"
        sx={{ textAlign: "center", mb: 10 }}
      >
        SEVENTEEN: History
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {history.map((section, index) => (
        <Section section={section} index={index} />
      ))}
    </Box>
  );
}
