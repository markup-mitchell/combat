import { heroStats, monsterStats } from "./stats";
import Entity from "./entity";
import GetStats from "./getStats";
import rollDice from "./dice";

const model = {
  turn: 0,
  fighters: [],
}

const view = {
  display: document.querySelector(".display"),
  messageBoard: document.querySelector(".messageBoard"),

  init() {
    this.clear(this.display);
    // add divs for fighter stats
    model.fighters.forEach(
      fighter => {
        const playerBoard = document.createElement("div");
        playerBoard.className = fighter.name;
        this.display.appendChild(playerBoard);
        //...and add their info
        this.renderPlayer(fighter);
      }
    );
  },

  renderPlayer(entity) {
    const playerBoard = document.querySelector(`.${entity.name}`);
    let stats = `
      <h3>${entity.name}</h3>
      <p>HP: ${entity.health}</p>
      <p>AT: ${entity.attack}</p>
      <p>DF: ${entity.defend}</p>
      <p>SP: ${entity.speed}</p>
      <p>ST: ${entity.stamina}</p>
    `;
    playerBoard.innerHTML = stats;
  },

  broadcast(message) {
    let messageNode = `
      <p class="fade-off">
        ${message}
      </p>
    `
    this.messageBoard.innerHTML = messageNode;
  },
  clear(element) {
    element.innerHTML = "";
  }
}

const controller = {
  init() {
    const hero = new Entity(heroStats);
    const monster = new Entity(monsterStats);
    model.fighters = [hero, monster];
    view.init();
  },

  attack() {
    let messages = [
      "<h3 class='fade-off'>attack fails!</h3>",
      "<h3 class='fade-off'>attack successful!</h3>"
    ];
    let [attacker, defender] = model.fighters;
    let attack = attacker.attack + rollDice(6, 2);
    let defend = defender.defend + rollDice(6, 1);
    let outcome = attack >= defend ? 1 : 0;
    defender.health -= outcome;
    view.renderPlayer(defender);
    view.broadcast(`
      <p class="fade-off">
        ${attacker.name} attacks (${attack}) - ${defender.name} defends (${defend})
      </p>   
        ${messages[outcome]}
    `);
    this.nextFighter();
    this.update();
  },
  nextFighter() {
    console.log(model.fighters);
    const currentOrder = model.fighters;
    currentOrder.reverse();
    console.log(model.fighters);
  },
  update() {
    model.fighters.forEach(fighter => {
      if (fighter.health === 0) {
        view.broadcast(`
          <h2>
            ${fighter.name} IS DEAD! GAME OVER
          </h2>
          <button onclick="location.reload()">reset</button>
        `);
      };
    })
  }
}

window.onload = controller.init();
window.controller = controller;
window.GetStats = GetStats;
window.model = model;
window.view = view;