import React from "react";
import SpinningPokeball from "./index";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

describe("SpinningPokeball", () => {
  test("SpinningPokeball renders correctly with no props", () => {
    render(<SpinningPokeball />);
  });

  test("SpinningPokeball with fullscreen mode have long top margin", () => {
    const { container } = render(<SpinningPokeball fullscreen />);
    const BallContainer = container.getElementsByTagName("div")[0];
    const FullscreenMargin = window.getComputedStyle(BallContainer)["margin"];
    expect(FullscreenMargin).toBe("250px auto 16px auto");
  });
});
