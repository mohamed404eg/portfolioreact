import React, { useEffect } from "react";
import Skill from "./Skills/Skills";
import PagePTitlePathname from "../../components/PagePTitlePathname/PagePTitlePathname";
import AboutMeContentOne from "../../components/AboutMeContent/AboutMeContentOne";
import AboutMeContentTow from "../../components/AboutMeContent/AboutMeContentTow";
import Facts from "./facts/Facts";

import PageAboutcss from "./PageAbout.css";
// Animation
import "aos/dist/aos.css";
import Aos from "aos";

function PageAbout() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="PageAbout" data-aos="fade-up">
      <PagePTitlePathname />
      <div className="AboutMeContent">
        <AboutMeContentOne btn={false}  />
        <AboutMeContentTow />
      </div>

      <Skill />

      <Facts />
    </div>
  );
}

export default PageAbout;
