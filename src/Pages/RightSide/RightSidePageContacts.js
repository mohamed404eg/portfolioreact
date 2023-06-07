import React from "react";
import { Route, Routes } from "react-router-dom";

function RightSidePageContacts({ RightSidePageContactsState }) {
  return (
    <>
      <Routes>
        <Route
          path="/contacts"
          element={
            <>
              <span
                style={{ top: RightSidePageContactsState + "px" }}
                className="RightSidePageContacts"
              ></span>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default RightSidePageContacts;
