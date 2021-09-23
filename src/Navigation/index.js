import React from "react";
import "./styles.css";

const Navigation = ({ children, pageId }) => {
  const toggleDisplay = () => {
    document
      .querySelector(`#navigation-content-${pageId}`)
      .classList.toggle("no-display");
  };
  return (
    <nav className="navigation">
      <button onClick={toggleDisplay}>...</button>
      <div
        id={`navigation-content-${pageId}`}
        className="navigation-content no-display"
      >
        {children}
      </div>
    </nav>
  );
};

export default Navigation;
