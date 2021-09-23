import Page from "./Page";
import "./App.css";
import React from "react";

function App() {
  function resizePages() {
    console.log("tocando boton");
    document.querySelector("#leftPage").classList.toggle("split-screen");
  }
  return (
    <React.Fragment>
      <Page id="leftPage" />
      <Page id="rightPage" />
      <button className="button-split-screen" onClick={resizePages}>
        {" "}
        +{" "}
      </button>
    </React.Fragment>
  );
}

export default App;
