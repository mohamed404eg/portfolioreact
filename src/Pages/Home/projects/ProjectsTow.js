import ProjectsTowCss from "./ProjectsTow.css";
import Rectangle22 from "../../../assets/Home/Rectangle 22.jpg";
import { Link } from "react-router-dom";
function ProjectsTow() {
  return (
    <div className="ProjectsTowDiv">
      <Project />
    </div>
  );
}

function Project() {
  return (
    <div className="Project">
      <div>
        <img src={Rectangle22} alt="Rectangle22"></img>
      </div>
      <div>
        <span>HTML</span>
        <span>SCSS</span>
        <span>Python</span>
        <span>Flask</span>
      </div>
      <div>
        <h4>ChertNodes</h4>
        <p>Minecraft servers hosting</p>
        <div>
          <Link to="#">{"Live <~>"}</Link>
          <Link to="#">{"Demo |>"}</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsTow;
