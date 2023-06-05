import React from "react";
import NavItem from "./NavItem";
import SelectLanguage from "./SelectLanguage";
import { useTranslation } from "react-i18next";
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

export default function MyAllNav() {
  const { t, i18n } = useTranslation();
  if (i18n.language === "ar") {
    data = [
      {
        id: 1,
        title: " الصفحة الرئسية ",
        href: "",
      },
      {
        id: 2,
        title: " المشريع ",
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
  }

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
