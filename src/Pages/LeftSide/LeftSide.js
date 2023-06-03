import LeftSideCss from "./LeftSide.css";
// svg

import { ReactComponent as Vector } from "../../assets/NavMobile/img/Vector.svg";
import { ReactComponent as Dribble } from "../../assets/NavMobile/img/Dribble.svg";
import { ReactComponent as Figma } from "../../assets/NavMobile/img/Figma.svg";
import { useRef, useState } from "react";
import Frame36Mycontacts from "../../assets/Home/Frame 36 Mycontacts.svg";

let LeftSideHandle;

function LeftSide() {
  let [Rectangle1Top, setRectangle1Top] = useState("");
  let [Rectangle2Top, setRectangle2Top] = useState("");
  LeftSideHandle = function LeftSideHandle(name, top) {
    //console.log(name, top);
    if (name === "LeftSideDiv-Rectangle-1") {
      setRectangle1Top((e) => (e = top));
    }
    if (name === "LeftSideDiv-Rectangle-2") {
      setRectangle2Top((e) => (e = top));
    }
  };

  let Rectangle_1 = useRef();
  let Rectangle_2 = useRef();

  return (
    <div className="LeftSideDiv">
      <span className="LeftSideDiv-Line"></span>

      <div className="LeftSideDiv-media">
        <Vector />
        <Dribble />
        <Figma />
      </div>

      <span
        ref={Rectangle_1}
        style={{ top: Rectangle1Top + "px" }}
        className="LeftSideDiv-Rectangle-1"
      ></span>

      <img
        ref={Rectangle_2}
        style={{ top: Rectangle2Top + "px" }}
        className="Frame36Mycontacts"
        src={Frame36Mycontacts}
        alt="Frame36Mycontacts"
      ></img>
    </div>
  );
}

export default LeftSide;

export { LeftSideHandle };
