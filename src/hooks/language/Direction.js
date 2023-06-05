import React from "react";
import { useTranslation } from "react-i18next";

export function Direction() {
  const { t, i18n } = useTranslation();

  if (i18n.language === "ar") {
    document.body.style.direction = "rtl";
  } else if (i18n.language === "en") {
    document.body.style.direction = "ltr";
  }
  return i18n.language;
}
