import SkillsSectionOneCss from "./SkillsSectionOne.css";
import FrameDot from "../../../assets/Home/Frame 27.svg";
import Framelogo from "../../../assets/Home/logo.svg";
function SkillsSectionOne() {
  return (
    <div className="SkillsSectionOne">
      <img
        src={FrameDot}
        alt="Frame 27"
        className="SkillsSectionOne-FrameDot"
      />
      <img
        src={FrameDot}
        alt="Frame 27"
        className="SkillsSectionOne-FrameDot2"
      />
      <span className="SkillsSectionOne-Rectangle-1"></span>
      <span className="SkillsSectionOne-Rectangle-2"></span>
      <img
        src={Framelogo}
        alt="Frame 27"
        className="SkillsSectionOne-Framelogo"
      />
    </div>
  );
}

export default SkillsSectionOne;
