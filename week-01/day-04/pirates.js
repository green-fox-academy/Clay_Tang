// Pirates
// Create a Pirate class. While you can add other fields and methods, you must have these methods:-

class Pirate {
  constructor(title = 'pirate', drunkLevel = 0) {
    this.title = title;
    this.drunkLevel = drunkLevel;
    this.state = true;
  }
  drinkSomeRum() {
    this.drunkLevel++;
  }
  howsItGoingMate() {
    if (this.drunkLevel <= 4) {
      console.log('Pour me anudder!');
    } else {
      console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
    }
  }
  die() {
    this.state = false;
  }
  brawl(x) {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
      x.state = false;
    } else if (randNum === 1) {
      this.state = false;
    } else {
      x.state = false;
      this.state = false;
    }
  }

}

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following.

// die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead.
// brawl(x) - where pirate fights another pirate (if that other pirate is alive) 
// and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
// And... if you get that far...

// Add a parrot.

// The Pirate Ship
// The place for the Pirates

// Create a Ship class.

class Ship {
  constructor(numOfRum = 40, captainState = 0) {
    this.ship = [];
    this.rum = numOfRum;
    this.captainState = captainState;

  }
  fillShip() {
    this.captain = new Pirate('captain');
    this.ship.push(this.captain);
    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
      this.ship.push(new Pirate());
    }
  }
  battle(otherShip) {
    if (this.ship.length - this.captain.drunkLevel > otherShip.ship.length - otherShip.captain.drunkLevel) {
      otherShip.ship.splice(1, Math.floor(Math.random() * 8));
      this.rum += Math.floor(Math.random() * 100);
      return true;
    } else {
      this.ship.splice(1, Math.floor(Math.random() * 8));
      otherShip.rum += Math.floor(Math.random() * 100);
      return false;
    }
  }
}

var newShip = new Ship(50);
var newShip2 = new Ship(80);
newShip.fillShip(10);
newShip2.fillShip(10);
console.log(newShip.battle(newShip2));
// console.log(newShip);

// The Ship stores Pirate-s instances in a list as the crew and has one captain who is also a Pirate.
// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
// Filling the ship with a captain and random number of pirates.
// Ships should be represented in a nice way on command line including information about
// captains consumed rum, state (passed out / died)
// number of alive pirates in the crew
// Ships should have a method to battle other ships: ship.battle(otherShip)
// should return true if the actual ship (this) wins
// the ship should win if its calculated score is higher
// calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
// The loser crew has a random number of losses (deaths).
// The winner captain and crew has a party, including a random number of rum :)
// BattleApp
// Create a BattleApp class, where you can fight with ships

class BattleApp {
  constructor() {
    this.ship1 = new Ship();
    this.ship2 = new Ship();
    this.ship1.fillShip(30);
    this.ship2.fillShip(30);
  }
  battle() {
    return this.ship1.battle(this.ship2);
  }
}

newBattle = new BattleApp();
console.log(newBattle);
console.log(newBattle.battle());
console.log(newBattle);

// Create 2 ships, fill them with pirates
// Have a battle!
// Armada
// Create an Armada class

class Armada {
  constructor() {
    this.ships = [];
  }
  shipsJoin(num) {
    for (let i = 0; i < num; i++) {
      let shipComes = new Ship()
      shipComes.fillShip(20);
      this.ships.push(shipComes);
    }
  }
  war(otherArmada) {
    let wins = 0;
    let loses = 0;
    this.ships.forEach((value, index) => {
      otherArmada.ships.forEach((value2, index2) => {
        if (value.battle(value2)) {
          wins++;
        } else {
          loses++;
        }

      })
    })
    if (wins > loses) {
      return true;
    } else {
      return false;
    }
  }
}

// Contains Ship-s as a list
// Have a armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets skipped so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner
// WarApp
// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!

class WarApp {
  constructor() {
    this.armada1 = new Armada();
    this.armada2 = new Armada();
    this.armada1.shipsJoin(20);
    this.armada2.shipsJoin(25);
  }
  haveWar() {
    return this.armada1.war(this.armada2);
  }
}

newBigWar = new WarApp();
console.log(newBigWar);
console.log(newBigWar.haveWar());