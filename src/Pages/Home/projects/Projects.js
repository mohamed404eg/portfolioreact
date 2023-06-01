import ProjectsCss from "./Projects.css";
import ProjectsTow from "./ProjectsTow";

function Projects() {
  return (
    <div className="ProjectsDiv">
      <div className="ProjectsOne">
        <div className="ProjectsOneDiv">
          {" "}
          <div className="ProjectsOneDivElements">
            <span className="ProjectsOneDivHash">#</span>
            <h2>Projects</h2>
            <span className="ProjectsOneDivLine"></span>
          </div>
          <div className="ProjectsOneDivTow">
            <span>
              {"  More"} <span>{"~>"}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="ProjectsTow">
        <ProjectsTow></ProjectsTow>
      </div>
    </div>
  );
}

export default Projects;
