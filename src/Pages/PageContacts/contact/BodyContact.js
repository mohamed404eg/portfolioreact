import React, { useEffect, useRef } from "react";
import BodyContactCss from "./contact.css";
import DiscordVector from "../../../assets/Home/DiscordVector.svg";
import EmailVector from "../../../assets/Home/EmailVector.svg";
import { RightSideHandle } from "../../RightSide/RghtSide";
import GetCoords from "../../../hooks/GetCoords";

function BodyContact() {
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
        <p>
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
      </div>

      <div className="BodyContactTow">
        <div className="BodyContactTow-Support">
          <p ref={SkillsP}>Support me here</p>
          <p>4149500120690030</p>
        </div>
        <div className="BodyContactMedia">
          <h6>Message me here </h6>
          <div className="BodyContactMedia-Collation-media">
            <div className="BodyContactMedia-media">
              <img src={DiscordVector} alt=""></img>
              <span>!Elias#3519</span>
            </div>

            <div className="MycontactContentMedia-media">
              <img src={EmailVector} alt=""></img>
              <span>elias@elias.me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContact;
