import styled from "@emotion/styled";
import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteData } from "../service/api";

const Detail = styled(ListItem)`
  margin-top: 10px;
`;

function Trans({ dd }) {
  const color = dd.amount > 0 ? "Green" : "Red";

  const deleteTrans = async (id) => {
    // setData(data.filter((item) => item._id !== id));
    await deleteData(id);
  };

  return (
    <Detail style={{ backgroundColor: color, color: "white" }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTrans(dd._id)} />
      </ListItemIcon>
      <ListItemText>{dd.text}</ListItemText>
      <ListItemText>{dd.amount}</ListItemText>
      <ListItemText>{dd.date}</ListItemText>
    </Detail>
  );
}

export default Trans;
