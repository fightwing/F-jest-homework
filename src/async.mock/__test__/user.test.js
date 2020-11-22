import axios from "axios";
import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    register("test", "test");
    expect(axios.post).toBeCalled();
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    await expect(register("fail", "test")).rejects.toThrowError(
      "wrong username or password"
    );
  });
});
