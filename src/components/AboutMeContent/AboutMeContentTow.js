import AboutMeContentTowCss from "./AboutMeContentTow.css";
import Image from "../../assets/Home/Image-1.png";
import Frame29 from "../../assets/Home/Frame 29.svg";
import Frame30 from "../../assets/Home/Frame 30.svg";
import { useEffect, useRef } from "react";
import { RightSideHandle } from "../../Pages/RightSide/RghtSide";
import GetCoords from "../../hooks/GetCoords";
function AboutMeContentTow() {
  // Rectangle-3 == ProjectsTow
  const RightSideRectangle3 = useRef();

  useEffect(() => {
    setTimeout(() => {
      RightSideHandle(
        "RightSideDiv-Rectangle-3",
        GetCoords(RightSideRectangle3.current).top + 360
      );
    }, 200);

    window.addEventListener("resize", () => {
      RightSideHandle(
        "RightSideDiv-Rectangle-3",
        GetCoords(RightSideRectangle3.current).top + 360
      );
    });
    setTimeout(() => {
      RightSideHandle(
        "RightSideAboutMeContent",
        GetCoords(RightSideRectangle3.current).top + 50
      );
    }, 200);

    window.addEventListener("resize", () => {
      RightSideHandle(
        "RightSideAboutMeContent",
        GetCoords(RightSideRectangle3.current).top + 50
      );
    });
  }, []);
  // Rectangle-3 == ProjectsTow \\
  return (
    <div className="AboutMeContentTow">
      <div className="AboutMeContentTow-image0Div">
        <img
          className="AboutMeContentTow-image0"
          src={Image}
          alt="Image1"
          ref={RightSideRectangle3}
        ></img>
      </div>
      <span className="AboutMeContentTowLine"></span>

      <img
        className="AboutMeContentTow-image1"
        src={Frame29}
        alt="Frame29"
      ></img>
      <img
        className="AboutMeContentTow-image2"
        src={Frame30}
        alt="Frame29"
      ></img>
    </div>
  );
}

export default AboutMeContentTow;
