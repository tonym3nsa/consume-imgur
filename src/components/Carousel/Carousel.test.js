import React from "react";
import { render } from "@testing-library/react";
import { SelectMediaType } from "./Carousel";

describe("SelectMediaType", () => {
  const defaultProps = {
    image: [],
  };
  function renderComponent(props = defaultProps) {
    return render(<SelectMediaType {...props} />);
  }

  it("renders null when there are no images", () => {
    const { container } = renderComponent();
    expect(container.firstChild).toBeNull();
  });

  it("render an image component when image type is image/png", () => {
    const props = {
      image: [{ type: "image/png", id: 1, link: "google.com" }],
    };
    const { getByTestId } = renderComponent(props);
    expect(getByTestId(/imageCardCarousel/)).toBeTruthy();
  });

  it("render an image component when video type is video/mp4", () => {
    const props = {
      image: [{ type: "video/mp4", id: 1, link: "google.com" }],
    };
    const { getByTestId } = renderComponent(props);
    expect(getByTestId(/videoCardCarousel/)).toBeTruthy();
  });
});
