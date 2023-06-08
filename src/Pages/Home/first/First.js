import React, { useEffect } from "react";
import Firstcss from "./First.css";
import FirstButton from "./FirstButton";
import { useTranslation } from "react-i18next";
import Aos from "aos";
function First() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div className="First" data-aos="fade-up">
      {/* First one */}
      <div className="First-one">
        <h2>
          {t("First-one-h2-1")} <span>{t("First-one-h2-2")}</span> {t()}
        </h2>
        <p>{t("First-one-p")}</p>

        <FirstButton></FirstButton>
      </div>
      {/*== First one == */}
      {/* First tow */}
      <div className="First-tow">
        <div
          className="First-tow-background"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="900"
        ></div>
        <img
          data-aos="zoom-out-down"
          className="First-tow-Logo"
          src={"./assets/img/Logo.svg"}
          alt=""
        ></img>
        <img
          data-aos="flip-up"
          className="First-tow-Dots"
          src={"./assets/img/Dots.svg"}
          alt=""
        ></img>

        <div
          className={
            i18n.language === "ar"
              ? "First-tow-welcome-AR First-tow-welcome"
              : "First-tow-welcome"
          }
        >
          <span></span>
          <p>{t("First-tow-welcome")}</p>
        </div>
      </div>

      {/* ==First tow== */}
    </div>
  );
}

export default First;
