import React from "react";
import Box from "@mui/material/Box";
import Balance from "./Card/Balance";
import Header from "./Header/Header";
import ExpenseCard from "./Card/ExpenseCard";
import NewTransactions from "./Card/NewTransactions";
import Transaction from "./Table/Transaction";
import Chart from "./Chart/Chart";
import { getData } from "../service/api";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Container = styled(Box)`
  display: flex;
`;

const Boxz = styled(Box)`
  background-color: white;
  margin: 20px;
  flex: 1;
  padding: 20px;
  border-radius: 20px;
`;

export default function Main(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    functionz();
  });

  const functionz = async () => {
    const res = await getData();
    if (res.data.length == 0) {
      setData(0);
    } else {
      setData(res.data);
    }
  };

  ///////////////////
  return (
    <div>
      <Header />
      <Container>
        <Boxz>
          <Balance data={data} />
          <ExpenseCard data={data} />
          <NewTransactions />
        </Boxz>
        <Boxz>
          <Chart data={data} />
        </Boxz>
      </Container>
      <Container>
        <Boxz>
          <Transaction data={data} />
        </Boxz>
      </Container>
    </div>
  );
}
