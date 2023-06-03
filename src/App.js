import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/MyHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftSide from "./Pages/LeftSide/LeftSide";
import RightSide from "./Pages/RightSide/RghtSide";
import MyFooter from "./Pages/Footer/MyFooter";
import PageProjects from "./Pages/Projects/PageProjects";
import MyHeader from "./Pages/Header/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="portFolio">
        <div className="LeftSide">
          <LeftSide></LeftSide>
        </div>

        <div className="container">
          <MyHeader />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<><Home /> </>} />
            <Route path="Projects" element={<Home />} />
            <Route path="PageProjects" element={<PageProjects />} />
          </Routes>
          {/* == Routes == */}
        </div>
        <div className="RightSide">
          <RightSide></RightSide>
        </div>
      </div>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
