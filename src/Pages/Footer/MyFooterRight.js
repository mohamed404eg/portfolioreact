import React from "react";
import MyFooterRightCss from "./MyFooterRight.css";
import { Link } from "react-router-dom";
import Github from "../../assets/Footer/Github.svg";
import Tiwiter from "../../assets/Media/Twitter.svg";
import linkedin from "../../assets/Media/Linkedin.svg";
import Discord from "../../assets/Footer/Discord.svg";
import { useTranslation } from "react-i18next";

function MyFooterRight() {
  const { t , i18n } = useTranslation();

  return (
    <div className="MyFooterRight">
      <span className={i18n.language === "ar" ? "MyFooterRightSpan-AR" : "" }>{t("Media")}</span>
      <div className="MyFooterRightMedia">
        <Link to={"https://github.com/mohamed404eg"}>
          {" "}
          <img src={Github} alt="Github"></img>
        </Link>
        <Link to={"https://twitter.com/mohamed404eg"}>
          {" "}
          <img src={Tiwiter} alt="Figma"></img>
        </Link>
        <Link to={"https://www.linkedin.com/in/mohamed404eg/"}>
          {" "}
          <img src={linkedin} alt="Discord"></img>
        </Link>
      </div>
    </div>
  );
}

export default MyFooterRight;
