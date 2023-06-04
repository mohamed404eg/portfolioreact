import LeftSideCss from "./LeftSide.css";
// svg

import { ReactComponent as Vector } from "../../assets/NavMobile/img/Vector.svg";
import { ReactComponent as Dribble } from "../../assets/NavMobile/img/Dribble.svg";
import { ReactComponent as Figma } from "../../assets/NavMobile/img/Figma.svg";
import { useRef, useState } from "react";

import { Route, Routes } from "react-router-dom";
import LeftSideDivHome from "./LeftSideDivHome";
import LeftSideAboutMeContent from "./LeftSideAboutMeContent";
import LeftSidePageContacts from "./LeftSidePageContacts";

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
      <div className="LeftSideDiv">
        <span className="LeftSideDiv-Line"></span>
        <div className="LeftSideDiv-media">
          <Vector />
          <Dribble />
          <Figma />
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
