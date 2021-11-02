import React from "react";
import { render } from "@testing-library/react";
import Header from "../../components/layout/header";

describe("Render Header Correctly", () => {
  it("Header Node in the Document", () => {
    const { container } = render(<Header />);
    let Node = container.querySelector(".main-header");
    expect(Node).toBeInTheDocument();
  });

  it("Toggle Correctly", () => {
    let collapse = false;
    const toggleSideBar = (v) => (collapse = v);
    let props = {
      collapse,
      toggleSideBar,
    };
    const { container } = render(<Header {...props} />);
    let Node = container.querySelector(".main-header");
    let LeftNode = Node.firstElementChild;
    let ToggleNode = LeftNode.firstElementChild;
    expect(ToggleNode.className).toMatch("toggle-sidebar");
  });
});
