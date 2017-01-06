class HoneyMakerBee extends Bee {
  constructor(age, color, food, eat) {
    super(color, food, eat);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    this.makeHoney = () => { this.honeyPot++; }
    this.giveHoney = () => { this.honeyPot--; }
  }
};
