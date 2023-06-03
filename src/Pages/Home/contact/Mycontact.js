import MycontactCss from "./Mycontact.css";
import DiscordVector from "../../../assets/Home/DiscordVector.svg";
import EmailVector from "../../../assets/Home/EmailVector.svg";
import { useEffect, useLayoutEffect, useRef } from "react";
import { LeftSideHandle } from "../../LeftSide/LeftSide";

function Mycontact() {
  const MycontactTopRef = useRef();

  useLayoutEffect(() => {
    // LeftSideDiv-Rectangle-2 === Mycontact
    let top = MycontactTopRef.current.getBoundingClientRect();

    setTimeout(() => {
      LeftSideHandle(
        "LeftSideDiv-Rectangle-2",
        top.bottom + (top.height  /2)
      );
    }, 300);

    // LeftSideDiv-Rectangle-2  === Mycontact \\
  }, []);

  return (
    <div className="Mycontact" ref={MycontactTopRef}>
      <div className="MycontactTitle">
        <span className="MycontactTitleHash">#</span>
        <h3>Mycontact</h3> <span className="MycontactTitleLine"></span>
      </div>

      <div className="MycontactContent">
        <div className="MycontactContentText" >
          <p>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="MycontactContentMedia">
          <h6>Message me here</h6>
          <div className="MycontactContentMedia-Collation-media">
            <div className="MycontactContentMedia-media">
              <img src={DiscordVector} alt=""></img>
              <span>!Elias#3519</span>
            </div>

            <div className="MycontactContentMedia-media">
              <img src={EmailVector} alt=""></img>
              <span>elias@elias.me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycontact;
