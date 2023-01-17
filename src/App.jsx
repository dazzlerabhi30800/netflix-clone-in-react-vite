import React, { useRef } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  const headerImage = useRef();
  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
