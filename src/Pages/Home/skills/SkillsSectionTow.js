import SkillsSectionTowCss from "./SkillsSectionTow.css";
import SkillsSectionTowTag from "./SkillsSectionTowTag";
function SkillsSectionTow() {
  return (
    <div className="SkillsSectionTow">
      <div className="SkillsSectionTow-Languages">
        {/* tag */}
        <SkillsSectionTowTag h5="Languages">
          <span>HTML</span> <span>CSS</span>
          <span>JAVASCRIPT</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>

      <div className="SkillsSectionTow-Databases">
        {/* tag */}
        <SkillsSectionTowTag h5="Databases">
          <span>very soon</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
      <div className="SkillsSectionTow-Other">
        {/* tag */}
        <SkillsSectionTowTag h5="Other">
          <span>MUI</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>
          <span>RESTful API</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
      <div className="SkillsSectionTow-Tools">
        {/* tag */}
        <SkillsSectionTowTag h5="Tools">
          <span>VSCode</span>
          <span>Figma</span>
          <span>Font Awesome</span>
          <span>VSCode</span>
          <span>Photoshop</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
      <div className="SkillsSectionTow-Frameworks">  {/* tag */}
        <SkillsSectionTowTag h5="Frameworks">
          <span>React</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}</div>
    </div>
  );
}

export default SkillsSectionTow;
