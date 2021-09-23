import React from "react";

const NavigationItem = ({
  children,
  title,
  urlContent,
  handlerNavigationItemClick,
}) => {
  return (
    <>
      <li>
        <a href="#" onClick={handlerNavigationItemClick}>
          {title ? title : urlContent}
        </a>{" "}
        {children}
      </li>
    </>
  );
};

export default NavigationItem;
