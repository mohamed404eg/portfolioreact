import React from "react";
import LeftSideCss from "./LeftSide.css";
// svg

import { ReactComponent as Vector } from "../../assets/NavMobile/img/Vector.svg";
import { ReactComponent as Dribble } from "../../assets/NavMobile/img/Dribble.svg";
import { ReactComponent as Figma } from "../../assets/NavMobile/img/Figma.svg";

function LeftSide() {
  return (
    <div className="LeftSideDiv">
      <span className="LeftSideDiv-Line"></span>

      <div className="LeftSideDiv-media">
        <Vector />
        <Dribble />
        <Figma />
      </div>
    </div>
  );
}

export default LeftSide;
