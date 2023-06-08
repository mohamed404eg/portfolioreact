import { useTranslation } from "react-i18next";
import SkillsSectionTowCss from "./SkillsSectionTow.css";
import SkillsSectionTowTag from "./SkillsSectionTowTag";
function SkillsSectionTow() {
  const { t, i18n } = useTranslation();
  return (
    <div data-aos="fade-up"
      className={
        i18n.language === "ar"
          ? "PageAboutSkillsSectionTow-AR  PageAboutSkillsSectionTow"
          : "PageAboutSkillsSectionTow"
      }
    >
      <div className="PageAboutSkillsSectionTow-Languages">
        {/* tag */}
        <SkillsSectionTowTag h5={t("Other")}>
          <span>HTML</span> <span>CSS</span>
          <span>JAVASCRIPT</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>

      <div className="PageAboutSkillsSectionTow-Other" >
        {/* tag */}
        <SkillsSectionTowTag h5={t("Languages")}>
          <span>MUI</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>
          <span>RESTful API</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
      <div className="PageAboutSkillsSectionTow-Tools">
        {/* tag */}
        <SkillsSectionTowTag h5={t("Tools")}>
          <span>VSCode</span>
          <span>Figma</span>
          <span>Font Awesome</span>
          <span>VSCode</span>
          <span>Photoshop</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
      <div className="PageAboutSkillsSectionTow-Frameworks">
        {" "}
        {/* tag */}
        <SkillsSectionTowTag h5={t("Frameworks")}>
          <span>React</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>

      <div className="PageAboutSkillsSectionTow-Databases">
        {/* tag */}
        <SkillsSectionTowTag h5={t("Databases")}>
          <span>{t("very soon")}</span>
        </SkillsSectionTowTag>
        {/* ==tag== */}
      </div>
    </div>
  );
}

export default SkillsSectionTow;
