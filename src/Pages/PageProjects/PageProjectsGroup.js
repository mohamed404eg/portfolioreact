import React from "react";
import ComponentProject from "../../components/componentProject/ComponentProject";

function PageProjectsComplete({ h2 }) {
  return (
    <div className="PageProjectsComplete">
      <div className="PageProjectsCompleteOne">
        <span>#</span>
        <h2>{h2}</h2>
      </div>

      <div>
        <ComponentProject />
        <ComponentProject />
      </div>
    </div>
  );
}

export default PageProjectsComplete;
