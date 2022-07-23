import { getTasks } from "../tasks";
import axios from "axios";

jest.mock("axios");

describe("Fetch API", () => {
  test("should fetch task", () => {
    const task = [{ id: 1, note: "test" }];
    const resp = { data: task };
    // @ts-ignore
    axios.get.mockResolvedValue(resp);
    return getTasks().then((response) => {
      expect(response.data).toEqual(task);
    });
  });
});
