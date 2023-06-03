import Logo from "../../assets/Home/Logo-white.svg"
import MyFooterLeftCss from "./MyFooterLeft.css";
function MyFooterLeft() {
  return (
    <div className="MyFooterLeft">
      <div className="MyFooterLeftOne">
        <div className="MyFooterLeft-Logo-Name">
          <img src={Logo} alt=""></img>
          <span>Mohamed</span>
        </div>

        <span className="MyFooterLeft-Email">elias@elias-dev.ml </span>
      </div>

      <div className="MyFooterLeftTow">
        <p > front-end developer😉</p>
      </div>
    </div>
  );
}

export default MyFooterLeft;
