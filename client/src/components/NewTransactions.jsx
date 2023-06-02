import { Box, Button, TextField, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,
  & > div,
  & > Button {
    margin-top: 30px;
  }
`;

function NewTransactions({ setData }) {
  const [text, setText] = useState("");
  const [am, setAm] = useState(0);
  const options = {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const currentDateTime = new Date().toLocaleString("en-IN", options);

  const handleSubmit = () => {
    const data = {
      id: Math.floor(Math.random() * 100000),
      date: currentDateTime,
      text: text,
      amount: Number(am),
    };
    console.log(data);

    setData((prev) => [data, ...prev]);
  };

  return (
    <Container>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        label="Enter"
        name="text"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter Value"
        name="amount"
        onChange={(e) => setAm(e.target.value)}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "black" }}
        onClick={handleSubmit}
      >
        Add Transaction
      </Button>
    </Container>
  );
}

export default NewTransactions;
