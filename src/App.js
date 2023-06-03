import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/MyHome";
import { BrowserRouter } from "react-router-dom";
import LeftSide from "./Pages/LeftSide/LeftSide";
import RightSide from "./Pages/RightSide/RghtSide";

function App() {
  return (
    <BrowserRouter>
      <div className="portFolio">
        <div className="LeftSide">
          <LeftSide></LeftSide>
        </div>
        <div className="container">
          <Home></Home>
        </div>
        <div className="RightSide">
          <RightSide></RightSide>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
