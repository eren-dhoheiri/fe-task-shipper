import React from "react";

const Button = ({ type, size = "md", onClick, children, prefix, suffix }) => {
  return (
    <button
      className={`button button--${size} button--${type}`}
      onClick={onClick}
      data-testid="button-add-driver"
    >
      {prefix && <span className="button__prefix">{prefix}</span>}
      {children && <span className="button__text">{children}</span>}
      {suffix && <span className="button__suffix">{suffix}</span>}
    </button>
  );
};

export default Button;
