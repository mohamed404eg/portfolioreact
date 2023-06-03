import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItemCSS from "./NavItemMobile.css";
import { toggleMenu } from "../MyHeader";
export function NavItemMobile(props) {
  let a = "NavItemTitleMobile";
  if (window.location.pathname === "/" + props.href) {
    a = "NavItemTitleACTIVEMobile";
  } else if (props.id === 1 && window.location.pathname === "") {
    a = "NavItemTitleACTIVEMobile";
  }

  function handleClick(event) {
    let item = document.querySelectorAll(".NavItemTitleACTIVEMobile");

    item.forEach((e) => {
      if (e.classList.contains("NavItemTitleACTIVEMobile")) {
        e.classList.add("NavItemTitleMobile");
      }
      e.classList.remove("NavItemTitleACTIVEMobile");
    });

    // check if Element === hash
    if (event.target.classList.contains("NavItemHashMobile")) {
      console.log(event.target.nextSibling);
      event.target.nextSibling.classList.add("NavItemTitleACTIVEMobile");
    } else {
      event.target.classList.add("NavItemTitleACTIVEMobile");
    }
    // go to section

    if (window.location.pathname === "/Projects") {
      window.scrollTo({
        top: document.querySelector("#Projects").getBoundingClientRect().top,
        left: 0,
        behavior: "smooth",
      });
    }

    toggleMenu()
  }

  useEffect(() => {
    // go to section
    if (window.location.pathname === "/Projects") {
      window.scrollTo({
        top: document.querySelector("#Projects").getBoundingClientRect().top,
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className="NavItemMobile" onClick={handleClick}>
      <Link className="NavItemAMobile" to={"./" + props.href}>
        <span className="NavItemHashMobile">#</span>
        <span className={a}>{props.children}</span>
      </Link>
    </div>
  );
}

export default NavItemMobile;
