import React from "react";
import { Route, Routes } from "react-router-dom";
import Rectangle3Img from "./../../assets/Home/Frame31-AboutMeTitle-Right.svg";
import { useTranslation } from "react-i18next";
function RightSideDivHome({ Rectangle1Top, Rectangle2Top, Rectangle3Top }) {
  const [t, i18n] = useTranslation();

  let RightSideDivClassName;
  if (i18n.language === "ar") {
    RightSideDivClassName = {
      1: "RightSideDiv-Rectangle-1-AR",
      2: "RightSideDiv-Rectangle-2-AR",
    };
  } else {
    RightSideDivClassName = {
      1: "RightSideDiv-Rectangle-1",
      2: "RightSideDiv-Rectangle-2",
    };
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <span
              style={{ top: Rectangle1Top + "px" }}
              className={RightSideDivClassName[1]}
            ></span>
            <span
              style={{ top: Rectangle2Top + "px" }}
              className={RightSideDivClassName[2]}
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
        path="/Projects"
        element={
          <>
            <span
              style={{ top: Rectangle1Top + "px" }}
              className={RightSideDivClassName[1]}
            ></span>
            <span
              style={{ top: Rectangle2Top + "px" }}
              className={RightSideDivClassName[2]}
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
