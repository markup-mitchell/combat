class Fight {
  nextTurn() {
    let [attacker, defender] = this.fighters;
    const attackScore = this.singleRoll(6) + attacker.attack;
    const defendScore = this.singleRoll(6) + defender.defend;
    if (attackScore > defendScore) {
      defender.takeDamage(1);
      console.log(`defender takes damage...${defender.health}HP remaining`);
    };

    return (`ATT: ${attackScore} DEF: ${defendScore}`);
  }
  nextFighter() {
    const currentOrder = this.fighters;
    currentOrder.reverse();
    this.fighters = currentOrder;
    console.log(this.fighters);
  }
  commence() {
    let messageBoard = document.querySelector(".messageBoard");
    let [attacker, defender] = model.fighters;

    let nextMessage = document.createElement("p");
    nextMessage.className = "fade-off";
    // console.log(`
    //   ${attacker.name}(${attacker.speed}), 
    //   ${defender.name}(${defender.speed})
    // `);
    if (attacker.speed > defender.speed) {
      nextMessage.innerHTML = `${attacker.name}'s initiative!`;
    }
    else if (defender.speed > attacker.speed) {
      nextMessage.innerHTML = `${defender.name}'s initiative!`;
    }
    else nextMessage.innerHTML = "no attacker initiative bonus";
    messageBoard.innerHTML = nextMessage;
    // setTimeout(()=> this.clear("messageBoard"), 2000);
  }
}

export default Fight;