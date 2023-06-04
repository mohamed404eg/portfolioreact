import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Frame36Mycontacts from "../../assets/Home/Frame 36 Mycontacts.svg";
function LeftSideDivHome({ Rectangle1Top, Rectangle2Top }) {
  let Rectangle_1 = useRef();
  let Rectangle_2 = useRef();
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <>
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
          </>
        }
      />

      <Route
        path={"/Projects"}
        element={
          <>
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
          </>
        }
      />
    </Routes>
  );
}

export default LeftSideDivHome;
