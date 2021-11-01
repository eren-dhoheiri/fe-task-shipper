import React from "react";
import Main from "../../components/layout/main";
import { ComingSoon } from "../../assets";

const BlankPage = () => {
  return (
    <Main>
      <div className="main-content">
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={ComingSoon} alt="coming-soon" style={{ height: 300 }} />
        </div>
      </div>
    </Main>
  );
};

export default BlankPage;
