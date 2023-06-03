import { useRef, useState } from "react";
import RightSideCss from "./RightSide.css";
import Rectangle3Img from "./../../assets/Home/Frame31-AboutMeTitle-Right.svg";
// svg

let RightSideHandle;
function RightSide() {
  let [Rectangle1Top, setRectangle1Top] = useState("");
  let [Rectangle2Top, setRectangle2Top] = useState("");
  let [Rectangle3Top, setRectangle3Top] = useState("");
  RightSideHandle = function RightSideHandle(name, top) {
    //console.log(name, top);
    if (name === "RightSideDiv-Rectangle-1") {
      setRectangle1Top((e) => (e = top));
    }
    if (name === "RightSideDiv-Rectangle-2") {
      setRectangle2Top((e) => (e = top));
    }
    if (name === "RightSideDiv-Rectangle-3") {
      setRectangle3Top((e) => (e = top));
      // console.log(top);
    }
  };

  // console.log("1");

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

      <span
        style={{ top: Rectangle3Top + "px" }}
        className="RightSideDiv-Rectangle-3"
      >
        <img src={Rectangle3Img} alt="Rectangle3"></img>
      </span>
    </div>
  );
}

export default RightSide;
export { RightSideHandle };
