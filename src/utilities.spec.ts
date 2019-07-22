import { isEven } from "./utilities";

describe("isEven", () => {
  it("should be false when 1", () => {
    expect(isEven(1)).toEqual(false);
  });

  it("should be true when 2", () => {
    expect(isEven(2)).toEqual(true);
  });

  it("should be false when 3", () => {
    expect(isEven(3)).toEqual(false);
  });

  it("should be true when 4", () => {
    expect(isEven(4)).toEqual(true);
  });
});
