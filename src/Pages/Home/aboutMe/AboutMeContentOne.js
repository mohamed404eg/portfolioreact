import AboutMeContentOneCss from "./AboutMeContentOne.css";
import { LeftSideHandle, LeftSideHandle2 } from "../../LeftSide/LeftSide";
import GetCoords from "../../../hooks/GetCoords";
import { useEffect, useRef } from "react";
function AboutMeContentOne() {
  // Rectangle-3 == ProjectsTow
  const Rectangle3 = useRef();
  useEffect(() => {
    setTimeout(() => {
      LeftSideHandle(
        "LeftSideDiv-Rectangle-1",
        GetCoords(Rectangle3.current).top + 20
      );
    }, 200);
    window.addEventListener("resize", () => {
      LeftSideHandle(
        "LeftSideDiv-Rectangle-1",
        GetCoords(Rectangle3.current).top + 20
      );
    });
  }, []);
  // Rectangle-3 \\

  return (
    <div className="AboutMeContentOne">
      <div>
        <p>Hello, i’m Mohamed!</p>
        <p ref={Rectangle3}>
          I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
          develop responsive websites from scratch and raise them into modern
          user-friendly web experiences.
        </p>

        <p>
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
      </div>
      <button>{"Read more ->"}</button>
    </div>
  );
}

export default AboutMeContentOne;
