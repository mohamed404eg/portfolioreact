
import TitleSectionCss from "./TitleSection.css";

function TitleSection({ h3, LineWidth }) {
  return (
    <div className="TitleSection">
      {" "}
      <span className="TitleSectionHash">#</span> <h3>{h3}</h3>{" "}
      <span className="TitleSectionLine" style={{ width: LineWidth }}></span>
    </div>
  );
}

export default TitleSection;
