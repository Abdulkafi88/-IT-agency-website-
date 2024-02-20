import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Com/Nav";
import Home from "./Com/Home";
import Features from "./Com/Features";
import Services from "./Com/Services"
import News from "./Com/News"
function App() {
  return (
    <>
      <Nav />
      <Home />
      <Features />
      <Services />
      <News />
    </>
  )
}

export default App;
