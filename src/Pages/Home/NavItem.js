import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import NavItemCSS from "./NavItem.css";
export function NavItem(props) {
  let a = "NavItemTitle";
  if (window.location.pathname === "/" + props.href) {
    a = "NavItemTitleACTIVE";
  } else if (props.id === 1 && window.location.pathname === "") {
    a = "NavItemTitleACTIVE";
  }

  function handleClick(event) {
    let item = document.querySelectorAll(".NavItemTitleACTIVE");

    item.forEach((e) => {
      if (e.classList.contains("NavItemTitleACTIVE")) {
        e.classList.add("NavItemTitle");
      }
      e.classList.remove("NavItemTitleACTIVE");
    });

  // check if Element === hash
    if (event.target.classList.contains("NavItemHash")) {
      console.log(event.target.nextSibling);
      event.target.nextSibling.classList.add("NavItemTitleACTIVE");
    } else {
      event.target.classList.add("NavItemTitleACTIVE");
    }

  }

  return (
    <div className="NavItem" onClick={handleClick}>
      <Link className="NavItemA" to={"./" + props.href}>
        <span className="NavItemHash">#</span>
        <span className={a}>{props.children}</span>
      </Link>
    </div>
  );
}

export default NavItem;
