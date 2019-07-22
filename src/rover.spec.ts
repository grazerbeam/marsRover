import { Rover } from "./rover";

describe("Rover", () => {
  it("should be initialised into a position", () => {
    let rover = new Rover(1, 2, "N", 5, 5);

    expect(rover.getPosition()).toEqual("1 2 N");
  });

  describe("turning left", () => {
    it("should face west when starting north", () => {
      let rover = new Rover(1, 2, "N", 5, 5);

      rover.rotateLeft();

      expect(rover.getPosition()).toEqual("1 2 W");
    });

    it("should face south when starting west", () => {
      let rover = new Rover(1, 2, "W", 5, 5);

      rover.rotateLeft();

      expect(rover.getPosition()).toEqual("1 2 S");
    });

    it("should face east when starting south", () => {
      let rover = new Rover(1, 2, "S", 5, 5);

      rover.rotateLeft();

      expect(rover.getPosition()).toEqual("1 2 E");
    });

    it("should face north when starting east", () => {
      let rover = new Rover(1, 2, "E", 5, 5);

      rover.rotateLeft();

      expect(rover.getPosition()).toEqual("1 2 N");
    });
  });

  describe("turning right", () => {
    it("should face east when starting north", () => {
      let rover = new Rover(1, 2, "N", 5, 5);

      rover.rotateRight();

      expect(rover.getPosition()).toEqual("1 2 E");
    });

    it("should face south when starting east", () => {
      let rover = new Rover(1, 2, "E", 5, 5);

      rover.rotateRight();

      expect(rover.getPosition()).toEqual("1 2 S");
    });

    it("should face west when starting south", () => {
      let rover = new Rover(1, 2, "S", 5, 5);

      rover.rotateRight();

      expect(rover.getPosition()).toEqual("1 2 W");
    });

    it("should face north when starting west", () => {
      let rover = new Rover(1, 2, "W", 5, 5);

      rover.rotateRight();

      expect(rover.getPosition()).toEqual("1 2 N");
    });
  });

  describe("moving forward on heading", () => {
    it("should move y + 1 when facing north", () => {
      let rover = new Rover(1, 2, "N", 5, 5);

      rover.moveForward();

      expect(rover.getPosition()).toEqual("1 3 N");
    });

    it("should move x + 1 when facing east", () => {
      let rover = new Rover(1, 2, "E", 5, 5);

      rover.moveForward();

      expect(rover.getPosition()).toEqual("2 2 E");
    });

    it("should move y - 1 when facing south", () => {
      let rover = new Rover(1, 2, "S", 5, 5);

      rover.moveForward();

      expect(rover.getPosition()).toEqual("1 1 S");
    });

    it("should move x - 1 when facing west", () => {
      let rover = new Rover(1, 2, "W", 5, 5);

      rover.moveForward();

      expect(rover.getPosition()).toEqual("0 2 W");
    });
  });

  describe("when rover is instructed to move out of bound", () => {
    it("should stop when facing north", () => {
      let rover = new Rover(5, 5, "N", 5, 5);

      rover.moveForward();

      expect(rover.getPosition()).toEqual("5 5 N");
    });

    it("should stop when facing east", () => {
      let rover = new Rover(5, 5, "E", 5, 5);

      rover.moveForward();

      expect(rover.getPosition()).toEqual("5 5 E");
    });

    it("should stop when facing south", () => {
      let rover = new Rover(0, 0, "S", 5, 5);

      rover.moveForward();

      expect(rover.getPosition()).toEqual("0 0 S");
    });

    it("should stop when facing west", () => {
      let rover = new Rover(0, 0, "W", 5, 5);

      rover.moveForward();

      expect(rover.getPosition()).toEqual("0 0 W");
    });
  });
});
