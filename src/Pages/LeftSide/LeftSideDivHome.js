import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Frame36Mycontacts from "../../assets/Home/Frame 36 Mycontacts.svg";
import { useTranslation } from "react-i18next";
function LeftSideDivHome({ Rectangle1Top, Rectangle2Top }) {
  let Rectangle_1 = useRef();
  let Rectangle_2 = useRef();

  const [t, i18n] = useTranslation();

  let LeftSideSideDivClassName;
  if (i18n.language === "ar") {
    LeftSideSideDivClassName = {
      1: "LeftSideDiv-Rectangle-1-AR",
      2: "Frame36Mycontacts-AR",
    };
  } else {
    LeftSideSideDivClassName = {
      1: "LeftSideDiv-Rectangle-1",
      2: "Frame36Mycontacts",
    };
  }

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <>
            <span
              ref={Rectangle_1}
              style={{ top: Rectangle1Top + "px" }}
              className={LeftSideSideDivClassName[1]}
            ></span>

            <img
              ref={Rectangle_2}
              style={{ top: Rectangle2Top + "px" }}
              className={LeftSideSideDivClassName[2]}
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
              className={LeftSideSideDivClassName[1]}
            ></span>

            <img
              ref={Rectangle_2}
              style={{ top: Rectangle2Top + "px" }}
              className={LeftSideSideDivClassName[2]}
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
