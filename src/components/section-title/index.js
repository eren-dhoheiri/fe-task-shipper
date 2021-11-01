import React from "react";

const PageTitle = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="main-content__header__title" data-testid="page-title">
        {title}
      </h1>
      <h5
        className="main-content__header__subtitle"
        data-testid="page-subtitle"
      >
        {subtitle}
      </h5>
    </>
  );
};

export default PageTitle;
