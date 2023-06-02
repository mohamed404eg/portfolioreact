import LeftSideCss from "./LeftSide.css";
// svg

import { ReactComponent as Vector } from "../../assets/NavMobile/img/Vector.svg";
import { ReactComponent as Dribble } from "../../assets/NavMobile/img/Dribble.svg";
import { ReactComponent as Figma } from "../../assets/NavMobile/img/Figma.svg";
import { useRef, useState } from "react";
let LeftSideHandle;
let LeftSideHandle2;
function LeftSide() {
  let [Rectangle1Top, setRectangle1Top] = useState("");
  LeftSideHandle = function LeftSideHandle(name, top) {
    //console.log(name, top);
    if (name === "LeftSideDiv-Rectangle-1") {
      setRectangle1Top((e) => (e = top));
    }
  };

  let Rectangle_1 = useRef();

  LeftSideHandle2 = function LeftSideHandle2(name, top) {
    if (name === "LeftSideDiv-Rectangle-1") {
      Rectangle_1.current.style.top = top + "px";
    }
    console.log(Rectangle_1.current.style.top )
  };

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
    </div>
  );
}

export default LeftSide;

export { LeftSideHandle, LeftSideHandle2 };
