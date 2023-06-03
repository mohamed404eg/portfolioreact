import { useEffect, useLayoutEffect, useRef } from "react";
import { RightSideHandle } from "../../RightSide/RghtSide";
import ProjectsCss from "./Projects.css";
import ProjectsTow from "./ProjectsTow";
import { Link } from "react-router-dom";

function Projects() {
  // Rectangle-2 == ProjectsTow
  const Rectangle2 = useRef();
  useEffect(() => {
    RightSideHandle("RightSideDiv-Rectangle-2", Rectangle2.current.offsetTop);
  }, []);
  // Rectangle-2 \\
  return (
    <div className="ProjectsDiv" id="Projects">
      <div className="ProjectsOne">
        <div className="ProjectsOneDiv">
          {" "}
          <div className="ProjectsOneDivElements">
            <span className="ProjectsOneDivHash">#</span>
            <h2 >Projects</h2>
            <span className="ProjectsOneDivLine"></span>
          </div>
          <div className="ProjectsOneDivTow">
            <span>
             <Link to={"/PageProjects"}>
             {"  More"} <span>{"~>"}</span>
             
             </Link> 
             
            </span>
          </div>
        </div>
      </div>
      <div className="ProjectsTow" ref={Rectangle2}>
        <ProjectsTow></ProjectsTow>
      </div>
    </div>
  );
}

export default Projects;
