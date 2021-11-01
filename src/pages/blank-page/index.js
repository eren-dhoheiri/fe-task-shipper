import React from "react";
import Main from "../../components/layout/main";
import { ShipperLogo } from "../../assets";

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
          <img src={ShipperLogo} alt="shipper" style={{ height: 40 }} />
        </div>
      </div>
    </Main>
  );
};

export default BlankPage;
