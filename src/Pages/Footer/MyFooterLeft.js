import { useTranslation } from "react-i18next";
import Logo from "../../assets/Home/Logo-white.svg";
import MyFooterLeftCss from "./MyFooterLeft.css";
function MyFooterLeft() {
  const { t, i18n } = useTranslation();

  return (
    <div className="MyFooterLeft">
      <div
        className={
          i18n.language === "ar" ? "MyFooterLeftOne-AR" : "MyFooterLeftOne"
        }
      >
        <div className="MyFooterLeft-Logo-Name">
          <img src={Logo} alt=""></img>
          <span>{t("title")}</span>
        </div>

        <span className="MyFooterLeft-Email">Mohamed404eg@gmail.com </span>
      </div>

      <div className="MyFooterLeftTow">
        <p> {t("Front-End by")}😉</p>
      </div>
    </div>
  );
}

export default MyFooterLeft;
