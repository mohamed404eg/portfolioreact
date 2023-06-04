import React from "react";
import { Route, Routes } from "react-router-dom";
import RightSideAboutMeContentSkillsSvg from "../../assets/AboutMe/RightSideAboutMeContentSkillsState.svg";

function RightSideAboutMeContent({ RightSideAboutMeContentState }) {
  return (
    <>
      <Routes>
        <Route
          path={"about-me"}
          element={
            <>
              <span
                style={{ top: RightSideAboutMeContentState + "px" }}
                className="RightSideAboutMeContent"
              ></span>
              
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}
function RightSideAboutMeContentSkills({ RightSideAboutMeContentSkillsState }) {
  return (
    <>
      <Routes>
        <Route
          path={"about-me"}
          element={
            <>
              <img
                src={RightSideAboutMeContentSkillsSvg}
                alt={RightSideAboutMeContentSkillsSvg}
                style={{ top: RightSideAboutMeContentSkillsState + "px" }}
                className="RightSideAboutMeContentSkillsSvg"
              ></img>
              
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default RightSideAboutMeContent;
export { RightSideAboutMeContentSkills };
