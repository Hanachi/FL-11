function Pokemons() {
  this.name = this.constructor.name;
  this.fly = false;
  this.lvl = 0;
  this.wild = true;
}
Pokemons.prototype.getType = function() {
  return this.type;
  }
Pokemons.prototype.getSpecie = function() {
  return this.specie; 
  }
Pokemons.prototype.canFly = function() {
  return this.fly;
  }
Pokemons.prototype.getPokemonType = function() {
  return this.name;
  }
Pokemons.prototype.getLvl = function() {
  return this.lvl;
}
Pokemons.prototype.raiseLvl = function() {
  return this.lvl ++;
}
Pokemons.prototype.resetLvl = function() {
  this.lvl = 0;
}
Pokemons.prototype.catchPokemon = function() {
  this.wild = false;
  this.lvl = Math.round(Math.random() * (10 - 0) + 0);
}
//Charmander
function Charmander() {
  Pokemons.call(this);
  this.type = 'Fire';
  this.specie = 'Lizard Pokemon';
}
Charmander.prototype = Object.create(Pokemons.prototype);
Charmander.prototype.constructor = Charmander;
Charmander.prototype.evolve = function() {
  return new Charmeleon();
}
//Charmeleon
function Charmeleon() {
  Charmander.call(this);
  this.specie = 'Flame Pokemon';
}
Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;
Charmeleon.prototype.evolve = function() {
  return new Charizard();
}
//Charizard
function Charizard() {
  Charmeleon.call(this);
  this.fly = true;
}
Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;
Charizard.prototype.evolve = function() {
  return this;
}
const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();
//Pichu
function Pichu() {
  Pokemons.call(this);
  this.type = 'Electric';
  this.specie = 'Mouse Pokemon';
}
Pichu.prototype = Object.create(Pokemons.prototype);
Pichu.prototype.constructor = Pichu;
Pichu.prototype.evolve = function() {
  return new Pikachu();
}
//Pikachu
function Pikachu() {
  Pichu.call(this);
}
Pikachu.prototype = Object.create(Pichu.prototype);
Pikachu.prototype.constructor = Pikachu;
Pikachu.prototype.evolve = function() {
  return new Raichu();
}
//Raichu
function Raichu() {
  Pikachu.call(this);
}
Raichu.prototype = Object.create(Pikachu.prototype);
Raichu.prototype.constructor = Raichu;
Raichu.prototype.evolve = function() {
  return this;
}
const pichu = new Pichu();
const pikachu = pichu.evolve();
const raichu = pikachu.evolve();