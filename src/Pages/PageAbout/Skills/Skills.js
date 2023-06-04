import SkillsSectionTow from "./SkillsSectionTow";
import skillsCss from "./Skills.css";
import { RightSideHandle } from "../../RightSide/RghtSide";
import { useEffect, useRef } from "react";
import GetCoords from "../../../hooks/GetCoords";
function Skills() {
  // RightSideAboutMeContentSkills
  const SkillsH3 = useRef();
  useEffect(() => {
    RightSideHandle(
      "RightSideAboutMeContentSkills",
      GetCoords(SkillsH3.current).top - 50
    );

    window.addEventListener("resize", () => {
      RightSideHandle(
        "RightSideAboutMeContentSkills",
        GetCoords(SkillsH3.current).top - 50
      );
    });
  }, []);
  // RightSideAboutMeContentSkills \\

  return (
    <div className="SkillsDiv">
      <div className="SkillsOne" ref={SkillsH3}>
        {" "}
        <span className="SkillsOneHash">#</span> <h3>Skills</h3>{" "}
        <span className="SkillsOneLine"></span>
      </div>

      <div className="SkillsTow">
        <div className="SkillsTow-child-2">
          {" "}
          <SkillsSectionTow></SkillsSectionTow>
        </div>
      </div>
    </div>
  );
}

export default Skills;
