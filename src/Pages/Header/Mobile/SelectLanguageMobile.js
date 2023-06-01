import React, { useEffect, useRef, useState } from "react";
import SelectLanguageMobile from "./SelectLanguageMobile.css";
export default function SelectLanguage() {
  let [language, setLanguage] = useState("EN");
  let [languagehtmlFor, setLanguagehtmlFor] = useState("languageInputMobile");
  let GroupBtnRef = useRef();
  let arrowRef = useRef();
  const handleLanguageArrowFocus = () => {
    console.log("handleLanguageArrowFocus");
    GroupBtnRef.current.classList.toggle("SelectLanguageStyleAppearMobile");
    // arrow
    arrowRef.current.classList.toggle("arrowDeg180");
    // arrow \\
  };
  const handleLanguageArrowBlur = () => {
    console.log("handleLanguageArrowBlur");
    setTimeout(() => {
      GroupBtnRef.current.classList.toggle("SelectLanguageStyleAppearMobile");
    }, 90);

    // htmlFor
    setLanguagehtmlFor(" ");
    setTimeout(() => {
      setLanguagehtmlFor((e) => (e = "languageInputMobile"));
    }, 150);

    // htmlFor \\

    // arrow
    if (arrowRef.current.classList.contains("arrowDeg180")) {
      arrowRef.current.classList.toggle("arrowDeg180");
    }
    // arrow \\
  };

  function handleLanguage(event) {
    setLanguage((e) => (e = event.target.name));
    setTimeout(() => {
      GroupBtnRef.current.classList.remove("SelectLanguageStyleAppearMobile");
    }, 150);

    // arrow
    arrowRef.current.classList.remove("arrowDeg180");
    // arrow \\
  }

  const handArrowSPAN = () => {
    // arrow
    arrowRef.current.classList.toggle("arrowDeg180");
    // arrow \\
    // Group Btn Ref
    setTimeout(() => {
      GroupBtnRef.current.classList.toggle("SelectLanguageStyleAppearMobile");
    }, 150);
    // Group Btn Ref \\
  };

  useEffect(handleLanguageArrowBlur, [language]);

  return (
    <>
      {/* Appear selectedLanguage */}
      <div className="SelectLanguageMobile">
        {/* // Appear selectedLanguage \\ */}
        <div className="SelectedLanguage">
          <label htmlFor={languagehtmlFor}>{language}</label>

          <select
            id="languageInputMobile"
            onBlur={handleLanguageArrowBlur}
            onFocus={handleLanguageArrowFocus}
          ></select>

          {/* 
          <input
            onBlur={handleLanguageArrowBlur}
            onFocus={handleLanguageArrowFocus}
            type="text"
            name="languageInput"
            id="languageInputMobile"
            value={language}
            disabled
            onChange={(event) => {
              handleLanguageArrowBlur();
              console.log("  c");
            }}

          ></input> */}

          {/* arrow */}
          <span className="arrowMobile" onClick={handArrowSPAN}>
            <svg
              className="arrowDeg"
              ref={arrowRef}
              width="10"
              height="10"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="9.29289"
                y1="5.70711"
                x2="4.29289"
                y2="0.707106"
                stroke="#ABB2BF"
                strokeWidth="2"
              />
              <line
                x1="5.70711"
                y1="0.707107"
                x2="0.707106"
                y2="5.70711"
                stroke="#ABB2BF"
                strokeWidth="2"
              />
            </svg>
          </span>
          {/* arrow  \\*/}
        </div>
        <div className="SelectLanguageStyleMobile" ref={GroupBtnRef}>
          <button onClick={handleLanguage} name="EN" className="option">
            EN
          </button>
          <button onClick={handleLanguage} name="AR" className="option">
            AR
          </button>
        </div>
      </div>
    </>
  );
}
