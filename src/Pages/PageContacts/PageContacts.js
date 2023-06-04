import PageContactsCss from "./PageContacts.css";
import PagePTitlePathname from "../../components/PagePTitlePathname/PagePTitlePathname";
import Contact from "./contact/BodyContact";
import TitleSection from "../../components/TitleSection/TitleSection";
import Twitter from "../../assets/PageContacts/Twitter.svg";
import linkedin from "../../assets/PageContacts/linkedin.svg";
import { Link } from "react-router-dom";
import { LeftSideHandle } from "../LeftSide/LeftSide";
import GetCoords from "../../hooks/GetCoords";
import { useEffect, useRef } from "react";

function PageContacts() {
  // LeftSidePageContacts
  const PageContactsRef = useRef();
  useEffect(() => {
    LeftSideHandle(
      "LeftSidePageContacts",
      GetCoords(PageContactsRef.current).top - 10
    );

    window.addEventListener("resize", () => {
      LeftSideHandle(
        "LeftSidePageContacts",
        GetCoords(PageContactsRef.current).top - 10
      );
    });
  }, []);
  // LeftSidePageContacts \\

  return (
    <div className="PageContacts">
      <PagePTitlePathname description={"Who am i?"} />
      <Contact />
      <div ref={PageContactsRef}>
        <TitleSection h3={"all-media"} LineWidth={0} />
      </div>
      <div className="all-media">
        <Link
          to={"https://twitter.com/mohamed404eg"}
          className="PageContacts-Twitter"
        >
          {" "}
          <img src={Twitter} alt="Twitter"></img>
          <span>@mohamed404eg</span>
        </Link>
        <Link
          to={"https://www.linkedin.com/in/mohamed404eg/"}
          className="PageContacts-Twitter"
        >
          {" "}
          <img src={linkedin} alt="linkedin"></img>
          <span>@mohamed404eg</span>
        </Link>
      </div>
    </div>
  );
}

export default PageContacts;
