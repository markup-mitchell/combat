export default class Entity {
  constructor({ name, health, attack, defend, stamina, speed }) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defend = defend;
    this.stamina = stamina;
    this.speed = speed;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
};