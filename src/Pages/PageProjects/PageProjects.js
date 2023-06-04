import PagePTitlePathname from "../../components/PagePTitlePathname/PagePTitlePathname";
import PageProjectsCSS from "./PageProjects.css";
import PageProjectsGroup from "./PageProjectsGroup";

function PageProjects() {
  return (
    <div className="PageProjectsTOP">
      <PagePTitlePathname> </PagePTitlePathname>

      <PageProjectsGroup h2="complete-apps" />
      <div className="small-projects">
        <PageProjectsGroup h2="small-projects" />
      </div>
    </div>
  );
}

export default PageProjects;
