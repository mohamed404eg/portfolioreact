import React, { useEffect } from "react";
import NavItemMobile from "./NavItemMobile";
import SelectLanguageMobile from "./SelectLanguageMobile";
import MyAllNavMobilecss from "./MyAllNavMobile.css";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";
import { ReactComponent as Close } from "../../.././assets/img/close.svg";
import { ReactComponent as Vector } from "../../.././assets/NavMobile/img/Vector.svg";
import { ReactComponent as Dribble } from "../../.././assets/NavMobile/img/Dribble.svg";
import { ReactComponent as Figma } from "../../.././assets/NavMobile/img/Figma.svg";
import { useTranslation } from "react-i18next";

let data;

export default function MyAllNavMobile({ menuOpen, toggleMenu }) {
  const { t, i18n } = useTranslation();
  if (i18n.language === "ar") {
    data = [
      {
        id: 1,
        title: " الصفحة الرئيسية ",
        href: "",
      },
      {
        id: 2,
        title: " المشاريع",
        href: "Projects",
      },
      {
        id: 3,
        title: " من انا ",
        href: "about-me",
      },
      {
        id: 4,
        title: " تواصل معي ",
        href: "contacts",
      },
    ];
  } else {
    data = [
      {
        id: 1,
        title: "home",
        href: "",
      },
      {
        id: 2,
        title: "works",
        href: "Projects",
      },
      {
        id: 3,
        title: "about-me",
        href: "about-me",
      },
      {
        id: 4,
        title: "contacts",
        href: "contacts",
      },
    ];
  }

  let dataMap = data.map((item, index) => {
    return (
      <NavItemMobile id={item.id} key={index} href={item.href}>
        {item.title}
      </NavItemMobile>
    );
  });

  useEffect(() => {
    document.querySelector("body").classList.toggle("overflow");
  }, [menuOpen]);
  if (menuOpen) {
    return (
      <div className="NavAllMobileDiv">
        <div className="HeadNvMobile90">
          <div className="HeadNvMobile">
            <Logo />
            <div className="Headeclose" onClick={toggleMenu}>
              <Close />
            </div>
          </div>
          <div
            className={
              i18n.language === "ar" ? "NavAllMobile-AR" : "NavAllMobile"
            }
          >
            {dataMap}
            <SelectLanguageMobile></SelectLanguageMobile>
          </div>
        </div>
        <div className="SocialMobileDIV">
          <div className="SocialMobile">
            <Link target="_blank" to={"https://github.com/mohamed404eg"}>
              <Vector />
            </Link>
            <Dribble />
            <Figma />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="NavAllMobileDivOut"></div>;
  }
}
