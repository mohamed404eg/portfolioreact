import React from 'react'
import FirstButtonCss from './FirstButton.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function FirstButton() {
  const { t, i18n } = useTranslation();
  return (
    <button className='ContactMeBtn'><Link to={"/contacts"}>
    {t("ContactMeBtn")}
    </Link>
    </button>
  )
}
