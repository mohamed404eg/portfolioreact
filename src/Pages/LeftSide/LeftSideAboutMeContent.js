import React from "react";
import svg from "../../assets/AboutMe/Frame 28.svg";
import { Route, Routes } from "react-router-dom";

function LeftSideAboutMeContent({ LeftSideAboutMeContentState }) {
  return (
    <Routes>
      <Route
        path="about-me"
        element={
          <img
            style={{ top: LeftSideAboutMeContentState + "px" }}
            className="LeftSideAboutMeContent"
            src={svg}
            alt="LeftSideAboutMeContent"
          ></img>
        }
      ></Route>
    </Routes>
  );
}

export default LeftSideAboutMeContent;
