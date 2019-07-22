import { Rover } from "./rover";
import { isEven } from "./utilities";

export class Houston {
  /**
   * Command for running one or more rovers
   * @param {string} input - plateuX plateuY\n[x y heading\ncommands]+
   *
   * @returns {string} x y heading for each rover
   *
   * @example 
   * command("5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM")
   */
  command(input: string): string {
    let inputArray: string[] = input.split("\n");

    if (inputArray.length < 3 || isEven(inputArray.length))
      throw new Error("invalid rows");

    let plateuArray = inputArray[0].split(" ").map(d => parseInt(d, 10));
    let plateuX = plateuArray[0];
    let plateuY = plateuArray[1];

    let output: string[] = [];

    for (let index = 1; index < inputArray.length; index += 2) {
      let positionArray = inputArray[index].split(" ");
      let startX = parseInt(positionArray[0], 10);
      let startY = parseInt(positionArray[1], 10);
      let heading = positionArray[2];

      let movements = inputArray[index + 1].split("");

      let rover = new Rover(startX, startY, heading, plateuX, plateuY);

      movements.forEach(m => {
        switch (m) {
          case "M":
            rover.moveForward();
            break;
          case "L":
            rover.rotateLeft();
            break;
          case "R":
            rover.rotateRight();
            break;
        }
      });
      output.push(rover.getPosition());
    }

    return output.join("\n");
  }
}
