import React from "react";
import Firstcss from "./First.css";
import FirstButton from "./FirstButton";
function First() {
  return (
    <div className="First">
      {/* First one */}
      <div className="First-one">
        <h2>
          Elias is a <span>web designer</span> and{" "}
          <span>front-end developer</span>
        </h2>
        <p>He crafts responsive websites where technologies meet creativity</p>

        <FirstButton></FirstButton>
      </div>
      {/*== First one == */}
      {/* First tow */}
      <div className="First-tow">
        <img src="" alt=""></img>
      </div>
      {/* ==First tow== */}
    </div>
  );
}

export default First;
