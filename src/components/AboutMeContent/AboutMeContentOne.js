import AboutMeContentOneCss from "./AboutMeContentOne.css";
import { LeftSideHandle, LeftSideHandle2 } from "../../Pages/LeftSide/LeftSide";
import GetCoords from "../../hooks/GetCoords";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
function AboutMeContentOne({ btn }) {
  // Rectangle-3 == ProjectsTow
  const Rectangle3 = useRef();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      LeftSideHandle(
        "LeftSideDiv-Rectangle-1",
        GetCoords(Rectangle3.current).top + 20
      );
    }, 200);
    window.addEventListener("resize", () => {
      LeftSideHandle(
        "LeftSideDiv-Rectangle-1",
        GetCoords(Rectangle3.current).top + 20
      );
    });

    setTimeout(() => {
      LeftSideHandle(
        "LeftSideAboutMeContent",
        GetCoords(Rectangle3.current).top + 50
      );
    }, 200);

    window.addEventListener("resize", () => {
      LeftSideHandle(
        "LeftSideAboutMeContent",
        GetCoords(Rectangle3.current).top + 50
      );
    });
  }, []);
  // Rectangle-3 \\

  return (
    <div className="AboutMeContentOne">
      <div>
        <p>{t('Hello, i’m Mohamed!')}</p>
        <p ref={Rectangle3}>
         {t("AboutMeContentOne-1")}
        </p>

        <p>
        {t("AboutMeContentOne-2")}
        </p>
      </div>
      {btn ? <button>{"Read more ->"}</button> : " "}
    </div>
  );
}

export default AboutMeContentOne;
