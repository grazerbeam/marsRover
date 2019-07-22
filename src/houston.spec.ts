import { Houston } from "./houston";

describe("houston commands", () => {
  it("should take the plateu coorodinates, first rover loction, first rover movements and return new location", () => {
    let houston = new Houston();
    expect(houston.command("5 5\n1 2 N\nLMLMLMLMM")).toEqual("1 3 N");
  });

  it("should take the plateu coorodinates, two rovers with loction, movements and return new location", () => {
    let houston = new Houston();
    expect(houston.command("5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM")).toEqual(
      "1 3 N\n5 1 E"
    );
  });
});
