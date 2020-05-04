import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "./index";

afterEach(cleanup);

describe("Error", () => {
  test("Error render", () => {
    const ErrorPage = () => (
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
    const { getByText } = render(<ErrorPage />);
    expect(getByText("Oops, something went wrong!")).toBeInTheDocument();
  });
});
