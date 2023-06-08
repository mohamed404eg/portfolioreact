import MycontactCss from "./Mycontact.css";
import Linkedin from "../../../assets/Media/Linkedin.svg";
import EmailVector from "../../../assets/Home/EmailVector.svg";
import { useEffect, useLayoutEffect, useRef } from "react";
import { LeftSideHandle } from "../../LeftSide/LeftSide";
import GetCoords from "../../../hooks/GetCoords";
import { useTranslation } from "react-i18next";
function Mycontact() {
  const { t, i18n } = useTranslation();
  const MycontactTopRef = useRef();

  useEffect(() => {
    // LeftSideDiv-Rectangle-2 === Mycontact
    let Rectangle2 = MycontactTopRef.current;

    setTimeout(() => {
      LeftSideHandle("LeftSideDiv-Rectangle-2", GetCoords(Rectangle2).top);
    }, 300);

    window.addEventListener("resize", () => {
      LeftSideHandle("LeftSideDiv-Rectangle-2", GetCoords(Rectangle2).top);
    });
    // LeftSideDiv-Rectangle-2  === Mycontact \\




  }, []);



  return (
    <div className="Mycontact" ref={MycontactTopRef} data-aos="fade-up">
      <div className="MycontactTitle">
        <span className="MycontactTitleHash">#</span>
        <h3>{t("contacts")}</h3> <span className="MycontactTitleLine"></span>
      </div>

      <div className="MycontactContent">
        <div className="MycontactContentText">
          <p id="MycontactContentGET">
          {t("MycontactContentGET")}
          
          </p>
        </div>
        <div className="MycontactContentMedia">
          <h6> {t("Message me here")}</h6>
          <div className="MycontactContentMedia-Collation-media">
            <div className="MycontactContentMedia-media">
              <img src={Linkedin} alt=""></img>
              <span>@mohamed404eg</span>
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

export default Mycontact;
