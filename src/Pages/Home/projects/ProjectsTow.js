import ProjectsTowCss from "./ProjectsTow.css";
import ProjectCss from "./Project.css";
import Rectangle22 from "../../../assets/Home/Rectangle 22.jpg";
import { Link } from "react-router-dom";
import ProjectJson from "../../../data/Projects.json";

function ProjectsTow() {
  let ProjectMap = ProjectJson.map((project) => {

    return (
      <Project
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

  return <div className="ProjectsTowDiv">{ProjectMap}</div>;
}

function Project({
  src,
  tag,
  title,
  description,
  btnTitle,
  btnTitleHref,
  btnTitle2,
  btnTitleHref2,
}) {
  let tagMap = tag.map((tag) => {
    return <span key={tag}>{tag}</span>;
  });
  return (
    <div className="Project">
      <div>
        <img src={Rectangle22} alt="Rectangle22"></img>
      </div>
      <div className="ProjectTag">{tagMap}</div>
      <div className="ProjectBody">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="ProjectLinks">
          <Link to={btnTitleHref}>{btnTitle}</Link>
          <Link to={btnTitleHref2}>{btnTitle2}</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsTow;
