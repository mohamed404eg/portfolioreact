import React from "react";
import MyHeader from "../Header/MyHeader";
import First from "./first/First";
import MyHomeCss from "./MyHome.css";
import Quote from "./quote/Quote";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import AboutMe from "./aboutMe/AboutMe";
import Mycontact from "./contact/Mycontact";
import MyFooter from "../Footer/MyFooter";

function Home() {
  return (
    <div className="HomeBody">
      
      <First></First>
      <Quote></Quote>
      <Projects />
      <Skills />
      <AboutMe />
      <Mycontact />
    </div>
  );
}

export default Home;
