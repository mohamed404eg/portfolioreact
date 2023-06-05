import React from "react";
import MyFooterRightCss from "./MyFooterRight.css";
import { Link } from "react-router-dom";
import Github from "../../assets/Footer/Github.svg";
import Figma from "../../assets/Footer/Figma.svg";
import Discord from "../../assets/Footer/Discord.svg";
import { useTranslation } from "react-i18next";

function MyFooterRight() {
  const { t , i18n } = useTranslation();

  return (
    <div className="MyFooterRight">
      <span className={i18n.language === "ar" ? "MyFooterRightSpan-AR" : "" }>{t("Media")}</span>
      <div className="MyFooterRightMedia">
        <Link to={"#"}>
          {" "}
          <img src={Github} alt="Github"></img>
        </Link>
        <Link to={"#"}>
          {" "}
          <img src={Figma} alt="Figma"></img>
        </Link>
        <Link to={"#"}>
          {" "}
          <img src={Discord} alt="Discord"></img>
        </Link>
      </div>
    </div>
  );
}

export default MyFooterRight;
