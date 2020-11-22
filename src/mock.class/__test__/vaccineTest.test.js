import VaccineTest from "../vaccineTest";

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => ({
    hasAntibodies: false,
    acceptInjection: jest
      .fn()
      .mockImplementation(function acceptInjection(vaccine) {
        if (vaccine.composition.includes("Virus Proteins")) {
          this.hasAntibodies = true;
        }
      }),
    getHasAntibodies: jest.fn().mockImplementation(function getHasAntibodies() {
      return this.hasAntibodies;
    }),
  }));
});

beforeEach(() => {
  // clear mock here
  jest.clearAllMocks();
  jest.resetModules();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(vaccineTest.recipient.acceptInjection).toBeCalled();
    expect(vaccineTest.recipient.getHasAntibodies()).toBeTruthy();
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    const vaccineTest = new VaccineTest();
    vaccineTest.inject();
    expect(vaccineTest.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    const vaccineTest = new VaccineTest();
    expect(vaccineTest.test()).toBe("Vaccine Test Failed");
  });
});
