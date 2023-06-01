import React from "react";
import MyHeader from "../Header/MyHeader";
import First from "./first/First";
import MyHomeCss from "./MyHome.css";
import Quote from "./quote/Quote";
import Projects from "./projects/Projects";

function Home() {
  return (
    <div className="HomeBody">
      <MyHeader></MyHeader>
      <First></First>
      <Quote></Quote>
      <Projects />
    </div>
  );
}

export default Home;
