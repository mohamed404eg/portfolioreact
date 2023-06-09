import { useEffect, useLayoutEffect, useRef } from "react";
import { RightSideHandle } from "../../RightSide/RghtSide";
import ProjectsCss from "./Projects.css";
import { Link } from "react-router-dom";
import GetCoords from "../../../hooks/GetCoords";
import ComponentProject from "../../../components/componentProject/ComponentProject";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t, i18n } = useTranslation();
  // Rectangle-2 == ProjectsTow
  const Rectangle2 = useRef();
  useEffect(() => {
    RightSideHandle(
      "RightSideDiv-Rectangle-2",
      GetCoords(Rectangle2.current).top + 100
    );

    window.addEventListener("resize", () => {
      RightSideHandle(
        "RightSideDiv-Rectangle-2",
        GetCoords(Rectangle2.current).top + 100
      );
    });
  }, []);
  // Rectangle-2 \\
  return (
    <div className="ProjectsDiv" id="Projects"  data-aos="fade-up">
      <div className="ProjectsOne">
        <div className="ProjectsOneDiv">
          {" "}
          <div className="ProjectsOneDivElements">
            <span className="ProjectsOneDivHash">#</span>
            <h2>{t("ProjectsOneDiv-h2")}</h2>
            <span className="ProjectsOneDivLine"></span>
          </div>
          <div className="ProjectsOneDivTow">
            <span>
              <Link to={"/PageProjects"}>
                {t("More")} <span>{"~>"}</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="ProjectsTow" ref={Rectangle2}>
        <ComponentProject />
      </div>
    </div>
  );
}

export default Projects;
