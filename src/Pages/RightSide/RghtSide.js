import { useRef, useState } from "react";
import RightSideCss from "./RightSide.css";

import { Route, Routes } from "react-router-dom";
import RightSideDivHome from "./RightSideDivHome";
import RightSideAboutMeContent, {
  RightSideAboutMeContentSkills,
} from "./RightSideAboutMeContent";
import RightSidePageContacts from "./RightSidePageContacts";
// svg
// Animation
import "aos/dist/aos.css";
import Aos from "aos";
let RightSideHandle;
function RightSide() {
  // useState
  let [Rectangle1Top, setRectangle1Top] = useState("");
  let [Rectangle2Top, setRectangle2Top] = useState("");
  let [Rectangle3Top, setRectangle3Top] = useState("");
  let [RightSideAboutMeContentState, setRightSideAboutMeContentState] =
    useState("");
  let [RightSidePageContactsState, setRightSidePageContactsState] =
    useState("");
  let [
    RightSideAboutMeContentSkillsState,
    setRightSideAboutMeContentSkillsState,
  ] = useState("");

  // useState \\

  RightSideHandle = function RightSideHandle(name, top) {
    if (name === "RightSideDiv-Rectangle-1") {
      setRectangle1Top((e) => (e = top));
    }
    if (name === "RightSideDiv-Rectangle-2") {
      setRectangle2Top((e) => (e = top));
    }
    if (name === "RightSideDiv-Rectangle-3") {
      setRectangle3Top((e) => (e = top));
    }
    if (name === "RightSideAboutMeContent") {
      setRightSideAboutMeContentState((e) => (e = top));
    }
    if (name === "RightSideAboutMeContentSkills") {
      setRightSideAboutMeContentSkillsState((e) => (e = top));
    }
    if (name === "RightSidePageContactsState") {
      setRightSidePageContactsState((e) => (e = top));
    }
  };

  return (
    <div className="RightSideDiv" data-aos="fade-left"
    data-aos-anchor="#example-anchor"
    data-aos-offset="600"
    data-aos-duration="500">
      <RightSideDivHome
        Rectangle1Top={Rectangle1Top}
        Rectangle2Top={Rectangle2Top}
        Rectangle3Top={Rectangle3Top}
      />

      <RightSideAboutMeContent
        RightSideAboutMeContentState={RightSideAboutMeContentState}
      />
      <RightSideAboutMeContentSkills
        RightSideAboutMeContentSkillsState={RightSideAboutMeContentSkillsState}
      />

      <RightSidePageContacts
        RightSidePageContactsState={RightSidePageContactsState}
      />
    </div>
  );
}

export default RightSide;
export { RightSideHandle };
