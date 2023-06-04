import { useEffect, useLayoutEffect, useRef, useState } from "react";
import AboutMeCss from "./AboutMe.css";
import AboutMeContentOne from "../../../components/AboutMeContent/AboutMeContentOne";
import AboutMeContentTow from "../../../components/AboutMeContent/AboutMeContentTow";
import { RightSideHandle } from "../../RightSide/RghtSide";

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="AboutMeTitle">
        {" "}
        <span className="AboutMeTitleHash">#</span> <h3>about-me</h3>{" "}
        <span className="AboutMeTitleLine"></span>
      </div>

      <div className="AboutMeContent">
        <AboutMeContentOne />
        <AboutMeContentTow />
      </div>
    </div>
  );
}

export default AboutMe;
