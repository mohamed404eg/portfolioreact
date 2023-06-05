import { useTranslation } from "react-i18next";
import Logo from "../../assets/Home/Logo-white.svg";
import MyFooterLeftCss from "./MyFooterLeft.css";
function MyFooterLeft() {
  const { t, i18n } = useTranslation();
  return (
    <div className="MyFooterLeft">
      <div className="MyFooterLeftOne">
        <div className="MyFooterLeft-Logo-Name">
          <img src={Logo} alt=""></img>
          <span>{t("title")}</span>
        </div>

        <span className="MyFooterLeft-Email">elias@elias-dev.ml </span>
      </div>

      <div className="MyFooterLeftTow">
        <p> {t("Front-End by")}😉</p>
      </div>
    </div>
  );
}

export default MyFooterLeft;
