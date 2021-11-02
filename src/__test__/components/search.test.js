import React from "react";
import { render } from "@testing-library/react";
import { Search } from "../../components";

describe("Render Search Correctly", () => {
  let props = {
    size: "md",
    onChange: "",
    placeholder: "Cari Driver",
  };

  let Node = null;

  beforeEach(() => {
    const { container } = render(<Search {...props} />);
    Node = container.querySelector(".search");
  });

  it("Search Node in the Document", () => {
    expect(Node).toBeInTheDocument();
  });
});
