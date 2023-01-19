import React from "react";
import "./App.css";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
