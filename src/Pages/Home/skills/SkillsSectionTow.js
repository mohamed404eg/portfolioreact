import { useTranslation } from "react-i18next";
import SkillsSectionTowCss from "./SkillsSectionTow.css";
import SkillsSectionTowTag from "./SkillsSectionTowTag";
function SkillsSectionTow() {
  const { t, i18n } = useTranslation();
  return (
    <div className={i18n.language === "ar" ? "SkillsSectionTow SkillsSectionTow-AR":"SkillsSectionTow"}  data-aos="fade-up">
      <div className="SkillsSectionTow-Languages">
        {/* tag */}
        <SkillsSectionTowTag h5={t("Languages")}>
          <span>HTML</span> <span>CSS</span>
          <span>JAVASCRIPT</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>

      <div className="SkillsSectionTow-Databases">
        {/* tag */}
        <SkillsSectionTowTag  h5={t("Databases")}>
          <span>{t("very soon")}</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
      <div className="SkillsSectionTow-Other">
        {/* tag */}
        <SkillsSectionTowTag  h5={t("Other")}>
          <span>MUI</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>
          <span>React Routes</span>
          <span>i18n React</span>
          <span>RESTful API</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
      <div className="SkillsSectionTow-Tools">
        {/* tag */}
        <SkillsSectionTowTag  h5={t("Tools")}>
          <span>VSCode</span>
          <span>Figma</span>
          <span>Font Awesome</span>
          <span>VSCode</span>
          <span>Photoshop</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
      <div className="SkillsSectionTow-Frameworks">
        {" "}
        {/* tag */}
        <SkillsSectionTowTag  h5={t("Frameworks")}>
          <span>React</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
    </div>
  );
}

export default SkillsSectionTow;
