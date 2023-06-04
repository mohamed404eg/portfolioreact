import Factscss from "./Facts.css";
import TitleSection from "../../../components/TitleSection/TitleSection";
import Frame from "../../../assets/AboutMe/Frame 28.svg";
import logo from "../../../assets/AboutMe/logo.svg";
function Facts() {
  return (
    <div>
      <TitleSection h3={"my-fun-facts"} LineWidth={0} />

      <div className="FactsSection">
        <div className="FactsSectionOne">
          <p className="FactsSection-P">
            I like <span>winter</span> more than summer
          </p>
          <p className="FactsSection-P">I live in Egypt </p>
          <p className="FactsSection-P"> My favorite movie is godfather</p>
          <p className="FactsSection-P"> I am still in university</p>
        </div>
        <div className="FactsSectionTow"> 
        <img src={Frame} alt=""></img>
        <img src={logo} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Facts;
