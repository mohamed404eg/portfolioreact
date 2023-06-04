import { useRef, useState } from "react";
import RightSideCss from "./RightSide.css";

import { Route, Routes } from "react-router-dom";
import RightSideDivHome from "./RightSideDivHome";
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
    <>
      <div className="RightSideDiv">
        <RightSideDivHome
          Rectangle1Top={Rectangle1Top}
          Rectangle2Top={Rectangle2Top}
          Rectangle3Top={Rectangle3Top}
        />
      </div>
    </>
  );
}

export default RightSide;
export { RightSideHandle };
