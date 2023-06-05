import React from 'react'
import FirstButtonCss from './FirstButton.css'
import { useTranslation } from 'react-i18next';
export default function FirstButton() {
  const { t, i18n } = useTranslation();
  return (
    <button className='ContactMeBtn'>{t("ContactMeBtn")}</button>
  )
}
