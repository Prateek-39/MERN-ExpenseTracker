import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [name, setname] = useState("");
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Login setname={setname} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main name={name} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
