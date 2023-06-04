import React from "react";

function SkillsSectionTowTag({h5 , children}) {
    console.log()
  return (
    <>
      {/* tag */}
      <div className="SkillsSectionTowDivJSX">

      <h5 className="SkillsSectionTow-tag-h5">{h5}</h5>
      <div className="SkillsSectionTow-tag-div">
        <div className="SkillsSectionTow-tag-2">
        {children}
        </div>
      </div>
      </div>

      {/* ==tag== */}
    </>
  );
}

export default SkillsSectionTowTag;
