import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import ExpenseCard from "./components/ExpenseCard";
import NewTransactions from "./components/NewTransactions";
import Transaction from "./components/Transaction";
import styled from "@emotion/styled";
import { useState } from "react";
import Chart from "./components/Chart";

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

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header />
      <Container>
        <Boxz>
          <Balance data={data} />
          <ExpenseCard data={data} />
          <NewTransactions setData={setData} />
        </Boxz>
        <Boxz>
          <Chart data={data} />
        </Boxz>
      </Container>
      <Container>
        <Boxz>
          <Transaction data={data} setData={setData} />
        </Boxz>
      </Container>
    </div>
  );
}

export default App;
