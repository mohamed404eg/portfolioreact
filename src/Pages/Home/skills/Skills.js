import SkillsSectionOne from "./SkillsSectionOne";
import SkillsSectionTow from "./SkillsSectionTow";
import skillsCss from "./Skills.css";
function Skills() {
  return (
    <div className="SkillsDiv">
      <div className="SkillsOne">
        {" "}
        <span className="SkillsOneHash">#</span> <h3>Skills</h3>{" "}
        <span className="SkillsOneLine"></span>
      </div>

      <div className="SkillsTow">
        <div className="SkillsTow-child-1">
          {" "}
          <SkillsSectionOne></SkillsSectionOne>
        </div>
        <div className="SkillsTow-child-2">
          {" "}
          <SkillsSectionTow></SkillsSectionTow>
        </div>
      </div>
    </div>
  );
}

export default Skills;
