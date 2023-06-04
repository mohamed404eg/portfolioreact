import React from "react";
import Skill from "./Skills/Skills";
import PagePTitlePathname from "../../components/PagePTitlePathname/PagePTitlePathname";
import AboutMeContentOne from "../../components/AboutMeContent/AboutMeContentOne";
import AboutMeContentTow from "../../components/AboutMeContent/AboutMeContentTow";
import Facts from "./facts/Facts";
import PageAboutcss from "./PageAbout.css";

function PageAbout() {
  return (
    <div className="PageAbout">
      <PagePTitlePathname />
      <div className="AboutMeContent">
        <AboutMeContentOne btn={false}/>
        <AboutMeContentTow />
      </div>

      <Skill/>

      <Facts />
    </div>
  );
}

export default PageAbout;
