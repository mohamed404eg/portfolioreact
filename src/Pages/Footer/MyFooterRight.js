import React from "react";
import MyFooterRightCss from "./MyFooterRight.css";
import { Link } from "react-router-dom";
import Github from "../../assets/Footer/Github.svg";
import Figma from "../../assets/Footer/Figma.svg";
import Discord from "../../assets/Footer/Discord.svg";

function MyFooterRight() {
  return (
    <div className="MyFooterRight">
      <span>Media</span>
      <div className="MyFooterRightMedia">
        <Link to={"#"}>
          {" "}
          <img src={Github} alt="Github"></img>
        </Link>
        <Link to={"#"}>
          {" "}
          <img src={Figma} alt="Figma"></img>
        </Link>
        <Link to={"#"}>
          {" "}
          <img src={Discord} alt="Discord"></img>
        </Link>
      </div>
    </div>
  );
}

export default MyFooterRight;
