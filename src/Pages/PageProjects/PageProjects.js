import PageProjectsCSS from "./PageProjects.css";
import PageProjectsGroup from "./PageProjectsGroup";

function PageProjects() {
  return (
    <div className="PageProjectsTOP">
      <div className="PageProjectsPTitlePathname">
        <p className="PageProjectsPTitlePathname-P1">
          <span>{window.location.pathname.charAt(0)}</span>
          <span>{window.location.pathname.slice(1)}</span>
        </p>
        <p className="PageProjectsPTitlePathname-P2">List of my projects</p>
      </div>

      <PageProjectsGroup h2="complete-apps" />
      <div className="small-projects">
      <PageProjectsGroup h2="small-projects" />
      </div>
    </div>
  );
}

export default PageProjects;
