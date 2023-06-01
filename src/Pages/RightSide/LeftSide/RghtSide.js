import { useRef, useState } from "react";
import RightSideCss from "./RightSide.css";
// svg

let RightSideHandle;
function RightSide() {
  const Rectangle1 = useRef();
  let [Rectangle1Top, setRectangle1Top] = useState("");
  RightSideHandle = function RightSideHandle(name, top) {
    //console.log(name, top);
    if (name === "RightSideDiv-Rectangle-1") {
      setRectangle1Top(e=> e = top );
    }
  };
  return (
    <div className="RightSideDiv">
      {console.log("4")}
      <span
        style={{ top: Rectangle1Top + "px" }}
        className="RightSideDiv-Rectangle-1"
        ref={Rectangle1}
      ></span>
    </div>
  );
}

export default RightSide;
export { RightSideHandle };
