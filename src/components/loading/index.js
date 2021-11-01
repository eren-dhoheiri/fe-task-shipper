import React from "react";
import { LoadingGif } from "../../assets";

const Loading = () => {
  return (
    <div
      style={{
        height: "30vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img height={200} src={LoadingGif} alt="loading" />
    </div>
  );
};

export default Loading;
