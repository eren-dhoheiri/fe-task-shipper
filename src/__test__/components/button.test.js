import React from "react";
import { render } from "@testing-library/react";
import Button from "../../components/button";
import { PlusOutlined } from "@ant-design/icons";

describe("Render Button Correctly", () => {
  let props = {
    type: "primary",
    size: "md",
    children: "TAMBAH",
    suffix: <PlusOutlined />,
  };

  let Node = null;

  beforeEach(() => {
    const { container } = render(<Button {...props} />);
    Node = container.querySelector(".button");
  });

  it("Button Node in the Document", () => {
    expect(Node).toBeInTheDocument();
  });

  it("Render with class correctly", () => {
    expect(Node.classList.contains("button--md")).toBe(true);
    expect(Node.classList.contains("button--primary")).toBe(true);
  });

  it("Render text correctly", () => {
    expect(Node.firstElementChild.className).toBe("button__text");
    expect(Node.firstElementChild.textContent).toBe("TAMBAH");
  });

  it("Render suffix correctly", () => {
    let suffix = Node.childNodes[1];
    expect(suffix.className).toBe("button__suffix");
    expect(suffix.firstElementChild.className).toBe("anticon anticon-plus");
  });
});
