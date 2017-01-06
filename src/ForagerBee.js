class ForagerBee extends Bee {
  constructor(age, job, canFly, color, food, eat) {
    super(color, food, eat);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
    this.forage = () => { this.treasureChest.push('treasure'); }
  }
};
