import React from "react";
import { render, screen } from "@testing-library/react";
import { Task } from "../../Models/Tasks";
import { Card } from "../Card";

const mockedTasks: Task[] = [
  {
    id: 1,
    note: "test",
  },
  {
    id: 2,
    note: "test2",
  }
];

test("render Card", () => {
  // @ts-ignore
  render(<Card index={1} tasks={mockedTasks} task={{ note: "test", id: 1 }} />);
  const linkElement = screen.getByText(/edit/i);
  expect(linkElement).toBeInTheDocument();
});
