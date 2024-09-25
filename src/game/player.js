export class Player {
  constructor(name) {
    this.name = name;
    this.marker = '';
    this.score = {
      w: 0,
      l: 0,
      d: 0,
    };
  }
}
