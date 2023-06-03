import { Link } from "react-router-dom";
import MyFooterCss from "./MyFooter.css";
import MyFooterLeft from "./MyFooterLeft";
import MyFooterRight from "./MyFooterRight";

function MyFooter() {
  return (
    <div className="MyFooterTOP">
      <div className="MyFooter">
        <MyFooterLeft />
        <MyFooterRight />
      </div>

      <div className="Copyright">
        © Copyright {new Date().getFullYear()}. Design by{" "}
        <Link to={"https://www.figma.com/community/file/1164933568884615740"}>
          Elias
        </Link>{" "}
        Front-End by{" "}
        <Link to={"https://www.linkedin.com/in/mohamed404eg/"}>
          Mohamed404eg
        </Link>
      </div>
    </div>
  );
}

export default MyFooter;
