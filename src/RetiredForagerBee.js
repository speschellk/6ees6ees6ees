class RetiredForagerBee extends ForagerBee {
  constructor(age, job, color, canFly, food, eat, treasureChest) {
    super(food, eat, treasureChest);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.forage = () => { return 'I am too old, let me play cards instead' };
    this.gamble = () => { this.treasureChest.push('treasure'); }
  }
};
