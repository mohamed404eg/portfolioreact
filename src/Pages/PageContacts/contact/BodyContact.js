import React, { useEffect, useRef } from "react";
import BodyContactCss from "./contact.css";
import Linkedin from "../../../assets/Media/Linkedin.svg";
import EmailVector from "../../../assets/Home/EmailVector.svg";
import { RightSideHandle } from "../../RightSide/RghtSide";
import GetCoords from "../../../hooks/GetCoords";
import { useTranslation } from "react-i18next";

function BodyContact() {
  const { t, i18n } = useTranslation();
  // RightSidePageContactsState
  const SkillsP = useRef();
  useEffect(() => {
    RightSideHandle(
      "RightSidePageContactsState",
      GetCoords(SkillsP.current).top - 10
    );

    window.addEventListener("resize", () => {
      RightSideHandle(
        "RightSidePageContactsState",
        GetCoords(SkillsP.current).top - 10
      );
    });
  }, []);
  // RightSideAboutMeContentSkills \\

  return (
    <div className="BodyContact">
      <div className="BodyContactOne">
        <p>{t("MycontactContentGET")}</p>
      </div>

      <div className="BodyContactTow">
        <div
          className={
            i18n.language === "ar"
              ? "BodyContactTow-Support-AR BodyContactTow-Support"
              : "BodyContactTow-Support"
          }
        >
          <p ref={SkillsP}>{t("Support me here")}</p>
          <p>❤</p>
        </div>
        <div
          className={
            i18n.language === "ar"
              ? "BodyContactMedia-AR BodyContactMedia"
              : "BodyContactMedia"
          }
        >
          <h6>{t("Message me here")}</h6>
          <div className="BodyContactMedia-Collation-media">
            <div className="BodyContactMedia-media">
              <img src={Linkedin} alt=""></img>
              <span>Mohamed404eg</span>
            </div>

            <div className="MycontactContentMedia-media">
              <img src={EmailVector} alt=""></img>
              <span>Mohamed404eg@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContact;
