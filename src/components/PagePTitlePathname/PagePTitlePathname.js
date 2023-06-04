import PagePTitlePathnameCss from "./PagePTitlePathname.css";

function PagePTitlePathname({description}) {
  return (
    <div className="PageProjectsPTitlePathname">
      <p className="PageProjectsPTitlePathname-P1">
        <span>{window.location.pathname.charAt(0)}</span>
        <span>{window.location.pathname.slice(1)}</span>
      </p>
      <p className="PageProjectsPTitlePathname-P2">{description}</p>
    </div>
  );
}

export default PagePTitlePathname;
