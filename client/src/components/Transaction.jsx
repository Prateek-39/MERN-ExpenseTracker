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

function Transaction({ data, setData }) {
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
          <Trans key={d.id} dd={d} data={data} setData={setData} />
        ))}
      </List>
    </Box>
  );
}

export default Transaction;
