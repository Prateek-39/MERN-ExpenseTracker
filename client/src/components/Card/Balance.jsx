import { Typography, Box } from "@mui/material";
import React from "react";

function Balance({ data }) {
  const amount = data.map((d) => d.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <Box>
      <Typography variant="h5">Balance: ₹ {total}</Typography>
    </Box>
  );
}

export default Balance;
