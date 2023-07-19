import React from "react";

function Header({ name }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px ",
          margin: "5px 10px",
        }}
      >
        <h1>Expense Tracker</h1>
      </div>
    </>
  );
}

export default Header;
