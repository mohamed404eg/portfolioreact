import SkillsSectionOneCss from "./SkillsSectionOne.css";
import FrameDot from "../../../assets/Home/Frame 27.svg";
import Framelogo from "../../../assets/Home/logo.svg";
import { useTranslation } from "react-i18next";
function SkillsSectionOne() {
  const { t, i18n } = useTranslation();
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
      <span className={i18n.language === "ar" ? "SkillsSectionOne-Rectangle-2 SkillsSectionOne-Rectangle-2-AR":"SkillsSectionOne-Rectangle-2"}></span>
      <img
        src={Framelogo}
        alt="Frame 27"
        className="SkillsSectionOne-Framelogo"
      />
    </div>
  );
}

export default SkillsSectionOne;
