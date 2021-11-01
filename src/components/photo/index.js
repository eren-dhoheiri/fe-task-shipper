import React from "react";
import { ImageHolder } from "../../assets";

const ImgHolder = ({ url, alt = "..." }) => {
  return (
    <div className="photo">
      <img src={url || ImageHolder} alt={alt} className="photo__img" />
    </div>
  );
};

export default ImgHolder;
