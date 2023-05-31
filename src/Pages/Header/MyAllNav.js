import React from "react";
import NavItem from "./NavItem";
import SelectLanguage from "./SelectLanguage";

let data = [
  {
    id: 1,
    title: "home",
    href: "",
  },
  {
    id: 2,
    title: "works",
    href: "works",
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

export default function MyAllNav() {
  let dataMap = data.map((item, index) => {
    return (
      <NavItem id={item.id} key={index} href={item.href}>
        {item.title}
      </NavItem>
    );
  });

  return (
    <>
      <div className="NavAll">
        {dataMap}
        <SelectLanguage></SelectLanguage>
      </div>
    </>
  );
}
