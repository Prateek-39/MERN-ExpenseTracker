import styled from "@emotion/styled";
import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Detail = styled(ListItem)`
  margin-top: 10px;
`;

function Trans({ dd, data, setData }) {
  const color = dd.amount > 0 ? "Green" : "Red";

  const deleteTrans = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <Detail style={{ backgroundColor: color, color: "white" }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTrans(dd.id)} />
      </ListItemIcon>
      <ListItemText>{dd.text}</ListItemText>
      <ListItemText>{dd.amount}</ListItemText>
      <ListItemText>{dd.date}</ListItemText>
    </Detail>
  );
}

export default Trans;
