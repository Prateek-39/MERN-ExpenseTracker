import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const Cardz = styled(Box)`
  display: flex;
  gap: 2px;
  & > div {
    flex: 1;
    padding: 10px;
  }
`;

function ExpenseCard({ data }) {
  const amount = data.map((d) => d.amount);

  const Income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const Expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <Cardz>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: "green" }}>₹{Income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: "red" }}>₹{Expense}</Typography>
        </CardContent>
      </Card>
    </Cardz>
  );
}

export default ExpenseCard;
