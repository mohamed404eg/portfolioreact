import React from "react";
import svg from "../../assets/PageContacts/Frame 28.svg";
import { Route, Routes } from "react-router-dom";

function LeftSidePageContacts({ LeftSidePageContactsState }) {
  return (
    <Routes>
      <Route
        path="contacts"
        element={
          <img
            style={{ top: LeftSidePageContactsState + "px" }}
            className="LeftSidePageContacts"
            src={svg}
            alt="LeftSidePageContacts"
          ></img>
        }
      ></Route>
    </Routes>
  );
}

export default LeftSidePageContacts;
