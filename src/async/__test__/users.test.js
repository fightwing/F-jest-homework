import getUsers from "../users";

jest.mock("axios");

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const expected = await getUsers();
    await expect(expected).resolves.toBe("test");
  });
});
