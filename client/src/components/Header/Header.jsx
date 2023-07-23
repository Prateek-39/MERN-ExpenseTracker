import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "0 30px 0 30px",
          margin: "10px 10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>Welcome {name}</h2>

        <Button
          color="inherit"
          style={{
            backgroundColor: "red",
            margin: "10px",
          }}
          onClick={() => localStorage.removeItem("token")}
          LinkComponent={Link}
          to={"/"}
        >
          LogOut
        </Button>
      </div>
    </>
  );
}

export default Header;
