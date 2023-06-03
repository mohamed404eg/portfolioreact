import { useEffect, useLayoutEffect, useRef, useState } from "react";
import AboutMeCss from "./AboutMe.css";
import AboutMeContentOne from "./AboutMeContentOne";
import AboutMeContentTow from "./AboutMeContentTow";
import { RightSideHandle } from "../../RightSide/RghtSide";
import { LeftSideHandle, LeftSideHandle2 } from "../../LeftSide/LeftSide";

function AboutMe() {
  // Rectangle-3 == ProjectsTow
  const Rectangle3 = useRef();
  useEffect(() => {
    RightSideHandle(
      "RightSideDiv-Rectangle-3",
      Rectangle3.current.getBoundingClientRect().top +
        Rectangle3.current.getBoundingClientRect().height
    );
    // Left Side Handle

    setTimeout(() => {
      LeftSideHandle(
        "LeftSideDiv-Rectangle-1",
        Rectangle3.current.getBoundingClientRect().top 
      );
    }, 200);
  }, []);
  // Rectangle-3 \\

  return (
    <div className="AboutMe">
      <div className="AboutMeTitle">
        {" "}
        <span className="AboutMeTitleHash">#</span> <h3>about-me</h3>{" "}
        <span className="AboutMeTitleLine"></span>
      </div>

      <div className="AboutMeContent" ref={Rectangle3}>
        <AboutMeContentOne />
        <AboutMeContentTow />
      </div>
    </div>
  );
}

export default AboutMe;
