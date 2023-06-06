import { useTranslation } from "react-i18next";
import PagePTitlePathname from "../../components/PagePTitlePathname/PagePTitlePathname";
import PageProjectsCSS from "./PageProjects.css";
import PageProjectsGroup from "./PageProjectsGroup";

function PageProjects() {
  const { t, i18n } = useTranslation();
  return (
    <div className="PageProjectsTOP">
      <PagePTitlePathname> </PagePTitlePathname>

      <PageProjectsGroup h2={t("complete-apps")}/>
      <div className="small-projects">
        <PageProjectsGroup h2={t("small-projects")} />
      </div>
    </div>
  );
}

export default PageProjects;
