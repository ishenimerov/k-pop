import { Avatar, Box, Typography } from "@mui/material";

export function MemeberItem(props: { name?: string; image?: string }) {
  return (
    <Box display="flex" gap={5} alignItems="center" ml={2}>
      <Avatar
        alt="Remy Sharp"
        sx={{ width: 200, height: 200 }}
        src={props.image}
      />
      <Typography variant="h5">{props.name}</Typography>
    </Box>
  );
}
