import React from "react";
import { Route, Routes } from "react-router-dom";
import Rectangle3Img from "./../../assets/Home/Frame31-AboutMeTitle-Right.svg";
function RightSideDivHome({ Rectangle1Top, Rectangle2Top, Rectangle3Top }) {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <>
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
          </>
        }
      ></Route>
      <Route
        path={"/Projects"}
        element={
          <>
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
          </>
        }
      ></Route>
    </Routes>
  );
}

export default RightSideDivHome;
