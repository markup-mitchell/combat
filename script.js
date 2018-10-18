import { heroStats, monsterStats } from "./stats";
import Entity from "./entity";
import GetStats from "./getStats";

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
    element.innerHTML="";
  }
}

const controller = {
  init() {
    const hero = new Entity(heroStats);
    const monster = new Entity(monsterStats);
    model.fighters = [hero, monster];
    view.init();
  }
}

window.onload = controller.init();
window.GetStats = GetStats;
window.model = model;
window.view = view;