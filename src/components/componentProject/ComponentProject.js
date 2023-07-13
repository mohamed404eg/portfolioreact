import ComponentProjectCss from "./ComponentProject.css";
import { Link } from "react-router-dom";
import ProjectJson from "../../../src/data/Projects.json";
import ProjectJsonSmall from "../../../src/data/ProjectJsonSmall.json";
import ComponentProjectSingle from "./ComponentProjectSingle";

function ComponentProject(small) {
  let ProjectMap = [];
  if (small) {
    ProjectJsonSmall = ProjectJson.map((project) => {
      return (
        <ComponentProjectSingle
          key={project.id}
          src={project.src}
          tag={project.tag}
          title={project.title}
          description={project.description}
          btnTitle={project.btnTitle}
          btnTitleHref={project.btnTitleHref}
          btnTitle2={project.btnTitle2}
          btnTitleHref2={project.btnTitleHref2}
        />
      );
    });
  } else {
    ProjectMap = ProjectJson.map((project) => {
      return (
        <ComponentProjectSingle
          key={project.id}
          src={project.src}
          tag={project.tag}
          title={project.title}
          description={project.description}
          btnTitle={project.btnTitle}
          btnTitleHref={project.btnTitleHref}
          btnTitle2={project.btnTitle2}
          btnTitleHref2={project.btnTitleHref2}
        />
      );
    });
  }

  return <div className="ProjectsTowDiv">{ProjectMap}</div>;
}

export default ComponentProject;
