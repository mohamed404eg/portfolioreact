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

let data = [
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

export default function MyAllNavMobile({ menuOpen, toggleMenu }) {
  let dataMap = data.map((item, index) => {
    return (
      <NavItemMobile id={item.id} key={index} href={item.href}>
        {item.title}
      </NavItemMobile>
    );
  });

  useEffect(()=>{
    document.querySelector("body").classList.toggle("overflow");
  }, [menuOpen])
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
          <div className="NavAllMobile">
            {dataMap}
            <SelectLanguageMobile></SelectLanguageMobile>
          </div>
        </div>
        <div className="SocialMobileDIV">
          <div className="SocialMobile">
            <Vector />
            <Dribble />
            <Figma />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="NavAllMobileDivOut"></div>
  }
}
