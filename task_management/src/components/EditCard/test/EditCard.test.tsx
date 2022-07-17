import React from "react";
import { render, screen } from "@testing-library/react";
import { EditCard } from "../EditCard";

test("render edit Task in EditCard", () => {
  // @ts-ignore
  render(<EditCard open={true} id={1} name={"test"} />);
  const linkElement = screen.getByText(/EditCard/i);
  expect(linkElement).toBeInTheDocument();
});
