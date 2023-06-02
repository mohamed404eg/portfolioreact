import { useRef, useState } from "react";
import RightSideCss from "./RightSide.css";
// svg

let RightSideHandle;
function RightSide() {
  let [Rectangle1Top, setRectangle1Top] = useState("");
  let [Rectangle2Top, setRectangle2Top] = useState("");
  RightSideHandle = function RightSideHandle(name, top) {
    //console.log(name, top);
    if (name === "RightSideDiv-Rectangle-1") {
      setRectangle1Top( top);
    }
    if (name === "RightSideDiv-Rectangle-2") {
      setRectangle2Top(top);
    }
  };

  return (
    <div className="RightSideDiv">
      <span
        style={{ top: Rectangle1Top + "px" }}
        className="RightSideDiv-Rectangle-1"
      ></span>
      <span
        style={{ top: Rectangle2Top + "px" }}
        className="RightSideDiv-Rectangle-2"
      ></span>
    </div>
  );
}

export default RightSide;
export { RightSideHandle };
