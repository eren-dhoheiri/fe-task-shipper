import React from "react";
import { render } from "@testing-library/react";
import Photo from "../../components/photo";

describe("Render Photo Correctly", () => {
  let Node = null;
  beforeEach(() => {
    const { container } = render(<Photo />);
    Node = container.querySelector(".photo");
  });

  it("Photo Wrapper Node in the Document", () => {
    expect(Node).toBeInTheDocument();
  });

  it("img Node in the Document", () => {
    expect(Node.firstElementChild).toBeInTheDocument();
    expect(Node.firstElementChild.className).toBe("photo__img");
  });
});
