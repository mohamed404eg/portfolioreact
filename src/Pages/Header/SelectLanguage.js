import React, { useEffect, useRef, useState } from "react";
import SelectLanguageCss from "./SelectLanguageCss.css";
import i18next from "i18next";
import { Direction } from "../../hooks/language/Direction";

let SelectLanguageHandle;
export default function SelectLanguage() {
  SelectLanguageHandle = function SelectLanguageHandle(language) {
    setLanguage(language);
  };

  let [language, setLanguage] = useState("EN");

  let [languagehtmlFor, setLanguagehtmlFor] = useState("languageInput");
  let GroupBtnRef = useRef();
  let arrowRef = useRef();
  let inputRef = useRef();

  const handleLanguageArrowFocus = () => {
    GroupBtnRef.current.classList.toggle("SelectLanguageStyleAppear");
    // arrow
    if (!arrowRef.current.classList.contains("arrowDeg180")) {
      arrowRef.current.classList.toggle("arrowDeg180");
    }
    // arrow \\
  };
  const handleLanguageArrowBlur = () => {
    setTimeout(() => {
      GroupBtnRef.current.classList.toggle("SelectLanguageStyleAppear");
    }, 150);

    // htmlFor
    setLanguagehtmlFor(" ");
    setTimeout(() => {
      setLanguagehtmlFor("languageInput");
    }, 150);

    // htmlFor \\
    // arrow
    if (arrowRef.current.classList.contains("arrowDeg180")) {
      arrowRef.current.classList.toggle("arrowDeg180");
    }
    // arrow \\
  };

  function handleLanguage(event) {
    SelectLanguageHandle(event.target.name);
    
    setTimeout(() => {
      GroupBtnRef.current.classList.remove("SelectLanguageStyleAppear");
    }, 150);

    // arrow
    if (arrowRef.current.classList.contains("arrowDeg180")) {
      arrowRef.current.classList.toggle("arrowDeg180");
    }
    // arrow \\
  }

  const handArrowSPAN = () => {
    // arrow
    arrowRef.current.classList.toggle("arrowDeg180");
    // arrow \\
    // Group Btn Ref
    setTimeout(() => {
      GroupBtnRef.current.classList.toggle("SelectLanguageStyleAppear");
    }, 150);
    // Group Btn Ref \\
  };

  // language
  useEffect(() => {
    let languageLowercase = language.toLocaleLowerCase();
    i18next.changeLanguage(languageLowercase).then((t) => {});
    console.log("rendering2");
  }, [language]);
  Direction();
  // language

  return (
    <>
      {/* Appear selectedLanguage */}
      <div className="SelectLanguage">
        {/* // Appear selectedLanguage \\ */}
        <div className="SelectedLanguage">
          <label htmlFor={languagehtmlFor}>{language}</label>
          <input
            onBlur={handleLanguageArrowBlur}
            onFocus={handleLanguageArrowFocus}
            type="text"
            name="languageInput"
            id="languageInput"
            value={language}
            ref={inputRef}
            onChange={(event) => {
              handleLanguageArrowBlur();
              console.log("  c");
            }}
          ></input>

          {/* arrow */}
          <span className="arrow" onClick={handArrowSPAN}>
            <svg
              className="arrowDeg"
              ref={arrowRef}
              width="10"
              height="7"
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
        <div className="SelectLanguageStyle" ref={GroupBtnRef}>
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

export { SelectLanguageHandle };
