enum heading {
  "N" = 0,
  "E" = 90,
  "S" = 180,
  "W" = 270
}

/**
 * Rover
 */
export class Rover {
  private h: heading;
  readonly originPlateauX = 0;
  readonly originPlateauY = 0;

  /**
   * Rover for exploring planets
   * @param x starting x coordinate
   * @param y starting y coordinate
   * @param headingInput initial heading
   * @param plateauX plateu x top right
   * @param plateauY plateu y top right
   */
  constructor(
    private x: number,
    private y: number,
    headingInput: string,
    private plateauX: number,
    private plateauY: number
  ) {
    this.h = heading[headingInput];
  }

  private setNormaliseHeading = (newHeading: number): void => {
    if (newHeading >= 360) {
      this.h = newHeading % 360;
    } else if (newHeading < 0) {
      this.h = 360 + newHeading;
    } else {
      this.h = newHeading;
    }
  };

  /**
   * Gets the current position of the rover
   * @returns {string} x y heading
   */
  getPosition = (): string => {
    return `${this.x} ${this.y} ${heading[this.h]}`;
  };

  /**
   * Moves the rover forward 1 grid point on current heading
   */
  moveForward(): void {
    switch (this.h) {
      case heading.N:
        if (this.y + 1 <= this.plateauY) this.y += 1;
        break;

      case heading.E:
        if (this.x + 1 <= this.plateauX) this.x += 1;
        break;

      case heading.S:
        if (this.y - 1 >= this.originPlateauY) this.y -= 1;
        break;

      case heading.W:
        if (this.x - 1 >= this.originPlateauX) this.x -= 1;
        break;
    }
  }

  /**
   * Rotates rover left 90 degrees
   */
  rotateLeft = (): void => {
    let newHeading = this.h - 90;
    this.setNormaliseHeading(newHeading);
  };

  /**
   * Rotates rover right 90 degrees
   */
  rotateRight = (): void => {
    let newHeading = this.h + 90;
    this.setNormaliseHeading(newHeading);
  };
}
