import React from "react";

const FieldName = ({ label, value }) => {
  return (
    <div className="field-name">
      <div className="field-name__label">{label}</div>
      <div className="field-name__value">{value}</div>
    </div>
  );
};

export default FieldName;
