class Cube {
  constructor(length) {
    this.length = length;
  }
  get volume() {
    return Math.pow(this.length, 3);
  }
  set volume(volume) {
    this.length = Math.cbrt(volume);
  }
  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
  set surfaceArea(surfaceArea) {
    this.length = Math.sqrt(surfaceArea / 6);
  }
}
