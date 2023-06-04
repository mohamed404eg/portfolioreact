import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// css
import MyHeader from "./MyHeader.css";
// css \\

import MyAllNav from "./MyAllNav";
import MyAllNavMobile from "./Mobile/MyAllNavMobile";

import SelectLanguage from "./SelectLanguage";

// export handle open
let toggleMenu;

function Header() {
  let logo = useRef();
  const [menuOpen, SetMenuOpen] = useState(false);

  toggleMenu = () => {
    SetMenuOpen(!menuOpen);
  };


  // on on Click logo than rest navBar
  useEffect(() => {
    logo.current.addEventListener("click", () => {
      // Home
      setTimeout(() => {
        if (window.location.pathname === "/") {
          let item = document.querySelectorAll(".NavItemTitleACTIVE");

          item.forEach((e) => {
            if (e.classList.contains("NavItemTitleACTIVE")) {
              e.classList.add("NavItemTitle");
            }
            e.classList.remove("NavItemTitleACTIVE");
          });

          let itemhOME = document.querySelectorAll(".NavItemTitle");
          let add = (itemhOME[0].className = "NavItemTitleACTIVE");
        }
      }, 100);
    });
  }, []);

  return (
    <header className="MyHeader">
      <div className="LogoImgText" ref={logo}>
        <Link to={"./"} className="LogoSvg">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 16.5H8V12.5H4H0V8.5V4.5V0.5H4H8V4.5H12H16V8.5V12.5V16.5H12ZM4 4.5H8V8.5H12V12.5H8V8.5H4V4.5Z"
              fill="white"
            />
          </svg>
        </Link>
        <Link to={"./"}>
          <h1 className="LogoText">Mohamed</h1>
        </Link>
      </div>

      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
      </div>
      <MyAllNav></MyAllNav>
      <MyAllNavMobile
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      ></MyAllNavMobile>
    </header>
  );
}

export default Header;
export { toggleMenu };
