import { useEffect, useLayoutEffect, useRef, useState } from "react";
import AboutMeCss from "./AboutMe.css";
import AboutMeContentOne from "../../../components/AboutMeContent/AboutMeContentOne";
import AboutMeContentTow from "../../../components/AboutMeContent/AboutMeContentTow";
import { RightSideHandle } from "../../RightSide/RghtSide";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t, i18n } = useTranslation();
  return (
    <div className="AboutMe"  data-aos="fade-up">
      <div className="AboutMeTitle">
        {" "}
        <span className="AboutMeTitleHash">#</span> <h3>{t("about-me")}</h3>{" "}
        <span className="AboutMeTitleLine"></span>
      </div>

      <div className="AboutMeContent">
        <AboutMeContentOne />
        <AboutMeContentTow />
      </div>
    </div>
  );
}

export default AboutMe;
