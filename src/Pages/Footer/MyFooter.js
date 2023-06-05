import { Link } from "react-router-dom";
import MyFooterCss from "./MyFooter.css";
import MyFooterLeft from "./MyFooterLeft";
import MyFooterRight from "./MyFooterRight";
import { useTranslation } from "react-i18next";
function MyFooter() {
  const { t, i18n } = useTranslation();

  return (
    <div className="MyFooterTOP">
      <div className="MyFooter">
        <MyFooterLeft />
        <MyFooterRight />
      </div>

      <div className="Copyright">
         {t("Copyright")}  © {new Date().getFullYear()}. {t("Design by")}{" "}
        <Link to={"https://www.figma.com/community/file/1164933568884615740"}>
          {t("DesignName")}
        </Link>{" "}
        {t("Front-End by")}{" "}
        <Link to={"https://www.linkedin.com/in/mohamed404eg/"}>
          Mohamed404eg
        </Link>
      </div>
    </div>
  );
}

export default MyFooter;
