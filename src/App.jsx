import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header/Header/Header";
import Feature from "./pages/Shared/Feature/Feature";
import OurChefGoals from "./pages/OurChefGoals/OurChefGoals";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Feature></Feature>
      <OurChefGoals></OurChefGoals>
    </div>
  );
}

export default App;
