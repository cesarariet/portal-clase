import React from "react";
import "./styles.css";

const Content = ({ urlContent, titleContent }) => {
  return (
    <>
      <iframe
        className="content-frame"
        src={urlContent}
        title={titleContent}
        referrerPolicy="no-referrer"
      ></iframe>
    </>
  );
};

export default Content;
