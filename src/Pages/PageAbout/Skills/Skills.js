import SkillsSectionTow from "./SkillsSectionTow";
import skillsCss from "./Skills.css";
import { RightSideHandle } from "../../RightSide/RghtSide";
import { useEffect, useRef } from "react";
import GetCoords from "../../../hooks/GetCoords";
import { useTranslation } from "react-i18next";
function Skills() {
  const { t, i18n } = useTranslation();
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
    <div className="PageAboutSkillsDiv">
      <div className="PageAboutSkillsOne" ref={SkillsH3}>
        {" "}
        <span className="PageAboutSkillsOneHash">#</span> <h3>{t("Skills")}</h3>{" "}
        <span className="PageAboutSkillsOneLine"></span>
      </div>

      <div className="PageAboutSkillsTow">
        <div className="PageAboutSkillsTow-child-2">
          {" "}
          <SkillsSectionTow></SkillsSectionTow>
        </div>
      </div>
    </div>
  );
}

export default Skills;
