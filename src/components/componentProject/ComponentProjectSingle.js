import { Link } from "react-router-dom";
import Rectangle22 from "../../assets/Home/Rectangle 22.jpg";
import ComponentProjectSingleCss from "./ComponentProjectSingle.css";

function ComponentProjectSingle({
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
          {btnTitle !== "" && btnTitle !== null ? (
            <Link to={btnTitleHref}>{btnTitle}</Link>
          ) : (
            ""
          )}
          {btnTitle2 !== "" && btnTitle2 !== null ? (
            <Link to={btnTitleHref2}>{btnTitle2}</Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ComponentProjectSingle;
