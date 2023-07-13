import React, { useEffect } from "react";
import ComponentProject from "../../components/componentProject/ComponentProject";
import Aos from "aos";
import { use } from "i18next";
function PageProjectsComplete({ h2 , small }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  },[]);
  return (
    <div className="PageProjectsComplete">
      <div className="PageProjectsCompleteOne">
        <span>#</span>
        <h2>{h2}</h2>
      </div>

      <div data-aos="fade-up">
        <ComponentProject small/>
      </div>
    </div>
  );
}

export default PageProjectsComplete;
