import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItemCSS from "./NavItem.css";

export function NavItem(props) {
  let a = "NavItemTitle";
  if (window.location.pathname === "/" + props.href) {
    a = "NavItemTitleACTIVE";
  } else if (props.id === 1 && window.location.pathname === "") {
    a = "NavItemTitleACTIVE";
  }

  let [Mylocation, setMyLocation] = useState(window.location.pathname);

  useEffect(() => {
    setInterval(() => {
      setMyLocation(window.location.pathname);
    }, 50);

    handleClick(null);
    document.querySelector("a").addEventListener("click", () => {
      handleClick(null);
    });
  }, [Mylocation]);

  function handleClick(event) {
    let item = document.querySelectorAll(".NavItemTitleACTIVE");

    item.forEach((e) => {
      if (e.classList.contains("NavItemTitleACTIVE")) {
        e.classList.add("NavItemTitle");
      }
      e.classList.remove("NavItemTitleACTIVE");
    });

    // check if Element === hash
    if (event) {
      if (event.target.classList.contains("NavItemHash")) {
        event.target.nextSibling.classList.add("NavItemTitleACTIVE");
      } else {
        event.target.classList.add("NavItemTitleACTIVE");
      }
    }

    // go to section

    if (document.querySelector("#Projects")) {
      if (window.location.pathname === "/Projects") {
        window.scrollTo({
          top: document.querySelector("#Projects").getBoundingClientRect().top,
          left: 0,
          behavior: "smooth",
        });
      }
    }

    // Home
    if (window.location.pathname === "/") {
      let itemhOME = document.querySelectorAll(".NavItemTitle");
      let add = (itemhOME[0].className = "NavItemTitleACTIVE");
    }
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
    <div className="NavItem" onClick={handleClick}>
      <Link className="NavItemA" to={props.href}>
        <span className="NavItemHash">#</span>
        <span className={a}>{props.children}</span>
      </Link>
    </div>
  );
}

export default NavItem;
