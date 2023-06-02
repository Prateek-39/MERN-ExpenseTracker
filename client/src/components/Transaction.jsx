import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Trans from "./Trans";

function Transaction({ data }) {
  return (
    <Box>
      <Typography variant="h5">Transcations History</Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemText>Category</ListItemText>
          <ListItemText>Amount</ListItemText>
          <ListItemText>Time</ListItemText>
        </ListItem>
        {data.map((d) => (
          <Trans key={d._id} dd={d} />
        ))}
      </List>
    </Box>
  );
}

export default Transaction;
