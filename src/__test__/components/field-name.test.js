import React from "react";
import { render } from "@testing-library/react";
import FieldName from "../../components/field-name";

describe("Render LabelValue Correctly", () => {
  let props = {
    label: "Test",
    value: "Component",
  };

  let Node = null;

  beforeEach(() => {
    const { container } = render(<FieldName {...props} />);
    Node = container.querySelector(".field-name");
  });

  it("LabelValue Node in the Document", () => {
    expect(Node).toBeInTheDocument();
  });

  it("Render label and value Correctly", () => {
    let NodeLabel = Node.childNodes[0];
    let NodeValue = Node.childNodes[1];

    expect(NodeLabel).toBeInTheDocument();
    expect(NodeLabel.className).toBe("field-name__label");
    expect(NodeLabel.textContent).toBe("Test");

    expect(NodeValue).toBeInTheDocument();
    expect(NodeValue.className).toBe("field-name__value");
    expect(NodeValue.textContent).toBe("Component");
  });
});
