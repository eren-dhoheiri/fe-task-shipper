import React from "react";
import { render } from "@testing-library/react";
import { DriverCard } from "../../components/card";

describe("Render Driver Card Correctly", () => {
  let props = {
    id: "100",
  };

  let Node = null;

  beforeEach(() => {
    const { container } = render(<DriverCard {...props} />);
    Node = container.querySelector(".card");
  });

  it("Card Node in the Document", () => {
    expect(Node).toBeInTheDocument();
  });

  it("Render Title Card Correctly", () => {
    let NodeHead = Node.firstElementChild;
    let NodeHeadTitle = NodeHead.firstElementChild;
    expect(NodeHead).toBeInTheDocument();
    expect(NodeHead.className).toBe("card__head");
    expect(NodeHeadTitle).toBeInTheDocument();
    expect(NodeHeadTitle.className).toBe("card__head__title");
    expect(NodeHeadTitle.textContent).toBe("ID Driver 100");
  });

  it("Render Option Buttons Correctly", () => {
    let NodeHead = Node.firstElementChild;
    expect(NodeHead).toBeInTheDocument();
  });

  it("Render Card Body Correctly", () => {
    let NodeBody = Node.childNodes[1];
    let NodeBodyContainer = NodeBody.firstElementChild;
    let NodeBodyContainerFirstCild = NodeBodyContainer.firstElementChild;

    expect(NodeBody).toBeInTheDocument();

    expect(NodeBodyContainer).toBeInTheDocument();
    expect(NodeBodyContainer.className).toBe("container");

    expect(NodeBodyContainerFirstCild).toBeInTheDocument();
    expect(NodeBodyContainerFirstCild.className).toBe("container__left");
  });

  it("Change class correctly when hovering", () => {});
});
