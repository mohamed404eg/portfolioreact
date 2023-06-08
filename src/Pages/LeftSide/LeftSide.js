import LeftSideCss from "./LeftSide.css";
// svg

import { ReactComponent as Vector } from "../../assets/NavMobile/img/Vector.svg";
import Linkedin from "../../assets/Media/Linkedin.svg";
import Twitter from "../../assets/Media/Twitter.svg";
import { useRef, useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import LeftSideDivHome from "./LeftSideDivHome";
import LeftSideAboutMeContent from "./LeftSideAboutMeContent";
import LeftSidePageContacts from "./LeftSidePageContacts";
import { useTranslation } from "react-i18next";
// Animation
import "aos/dist/aos.css";
import Aos from "aos";
let LeftSideHandle;

function LeftSide() {
  let [Rectangle1Top, setRectangle1Top] = useState("");
  let [Rectangle2Top, setRectangle2Top] = useState("");
  let [LeftSideAboutMeContentState, setLeftSideAboutMeContentState] =
    useState("");
  let [LeftSidePageContactsState, setLeftSidePageContactsState] = useState("");
  LeftSideHandle = function LeftSideHandle(name, top) {
    // console.log(name, top);

    if (name === "LeftSideDiv-Rectangle-1") {
      setRectangle1Top((e) => (e = top));
    }
    if (name === "LeftSideDiv-Rectangle-2") {
      setTimeout(() => {
        setRectangle2Top(top);
      }, 300);
    }
    if (name === "LeftSideAboutMeContent") {
      setLeftSideAboutMeContentState((e) => (e = top));
    }
    if (name === "LeftSidePageContacts") {
      setLeftSidePageContactsState((e) => (e = top));
    }
  };

  return (
    <>
      <div
        className="LeftSideDiv"
        data-aos="fade-up"
        data-aos-anchor="#example-anchor"
        data-aos-offset="600"
        data-aos-duration="500"
      >
        <span className="LeftSideDiv-Line"></span>
        <div className="LeftSideDiv-media">
          <Link target="_blank" to={"https://github.com/mohamed404eg"}>
            <Vector />
          </Link>
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/mohamed404eg/"}
          >
            <img src={Linkedin} alt="Linkedin"></img>
          </Link>
          <Link target="_blank" to={"https://twitter.com/mohamed404eg"}>
            <img src={Twitter} alt="Twitter"></img>
          </Link>
        </div>

        <LeftSideDivHome
          Rectangle1Top={Rectangle1Top}
          Rectangle2Top={Rectangle2Top}
        />
        <LeftSideAboutMeContent
          LeftSideAboutMeContentState={LeftSideAboutMeContentState}
        />
        <LeftSidePageContacts
          LeftSidePageContactsState={LeftSidePageContactsState}
        />
      </div>
    </>
  );
}

export default LeftSide;

export { LeftSideHandle };
