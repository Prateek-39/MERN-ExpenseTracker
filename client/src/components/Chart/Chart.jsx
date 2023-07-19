import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const colors = ["Green", "Red"];

const Chart = ({ data }) => {
  const amount = data.map((d) => d.amount);

  const Income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const Expense =
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  /////////////////////////////////////////////////////////

  const x = Math.round((Income / (Income + Expense)) * 100);
  const y = Math.round((Expense / (Income + Expense)) * 100);

  data = [
    { text: "Income", value: x },
    { text: "Expense", value: y },
  ];
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
