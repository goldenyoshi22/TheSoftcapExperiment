function $(id) {return document.getElementById(id)}; //totally not copy pasted
function c(classname) {return document.getElementsByClassName(classname)};

let D = x => {
  return new OmegaNum(x);
} //totally not copy pasted 2

var ON = OmegaNum;

var game = {
money: D(0),
softcap: D(0),
softcap2: D(0),
power: D(2),
power2: D(1.1),
power3: D(1),
upgcosts: [D(1.9999999999999998), D(2.22222222), D(2.527993), D(2.97287), D(3.6757136746696744), D(4.944766020612565), D(10), D(50), D(100), D(250), D(420), D(1337), Infinity],
upgradeon: 0,
prestigecosts: [D(7.9), D(20), D(42)],
prestigeon: 0
}

var app = new Vue({
  el: '#game',
  data: {
	game: game
  }
})

function getmoney() {
game.money = game.money.add(ON.div(1, ON.pow(game.power, game.softcap)).mul(game.power3))
game.softcap = game.softcap.add(1)
}

function upgrade() {
if (game.money.gte(game.upgcosts[game.upgradeon])) {game.money = D(0); game.softcap = D(0); game.upgradeon += 1; game.power = game.power.div(game.power2); game.power2 = game.power2.root(ON.mul(1.01, game.power3.div(game.power3.pow(1.01)))); game.softcap2 = game.softcap2.add(1)}
}

function prestige() {
if (game.money.gte(game.prestigecosts[game.prestigeon])) {game.money = D(0); game.softcap = D(0); game.softcap2 = D(0); game.upgradeon = 0; game.power = D(2); game.power2 = D(1.1); game.power3 = game.power3.mul(1.25)}
}

Mousetrap.bind("enter", () => alert('nice try buddy'))