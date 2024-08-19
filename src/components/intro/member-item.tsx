import { Avatar, Box, Grid, Typography } from "@mui/material";

export function MemeberItem(props: { name?: string; image?: string }) {
  return (
    <Box display="flex" gap={5} alignItems={"center"}>
      <Avatar
        alt="Remy Sharp"
        sx={{ width: 200, height: 200 }}
        src={props.image}
      />
      <Typography variant="h4">{props.name}</Typography>
    </Box>
  );
}
