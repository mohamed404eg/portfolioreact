import Factscss from "./Facts.css";
import TitleSection from "../../../components/TitleSection/TitleSection";
import Frame from "../../../assets/AboutMe/Frame 28.svg";
import logo from "../../../assets/AboutMe/logo.svg";
import { useTranslation } from "react-i18next";
function Facts() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <TitleSection h3={t("my-fun-facts")} LineWidth={0} />

      <div className="FactsSection">
        <div className="FactsSectionOne">
          <p className="FactsSection-P">
            {t("I like")}
            <span> {t("winter")} </span>
            {t("more than summer")}
          </p>
          <p className="FactsSection-P">{t("I live in Egypt")}</p>
          <p className="FactsSection-P">
            {" "}
            {t("My favorite movie is godfather")}
          </p>
          <p className="FactsSection-P"> {t("I am still in university")} </p>
        </div>
        <div className="FactsSectionTow">
          <img src={Frame} alt=""></img>
          <img src={logo} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Facts;
