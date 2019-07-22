class Fighter{
	constructor(object){
		this.object = object;
		this.wins = 0;
		this.losses = 0;
		this.maxHp = this.object.hp;
	}
	getName(){
		return this.object.name;
	}
	getDamage(){
		return this.object.damage;
	}
	getAgility(){
		return this.object.agility;
	}
	getHealth(){
		return this.object.hp;
	}
	dealDamage(attackDmg){
		if(this.object.hp < attackDmg){
			this.object.hp = 0;
			return this.object.hp;
		} else {
			this.object.hp -= attackDmg;
			return this.object.hp;
		}
	}
	heal(healHp){
		if(this.object.hp + healHp > this.maxHp){
			this.object.hp = this.maxHp;
			return this.object.hp;
		} else {
			this.object.hp += healHp;
			return this.object.hp;
		}
	}
	attack(defender){
		let maxProb = 100;
		let chance = Math.round(Math.random() * maxProb);
		if(chance <= defender.getAgility()){
			defender.dealDamage(this.getDamage());
			console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	}
	logCombatHistory(){
		console.log(`${this.getName()}, Wins:${this.wins}, Losses:${this.losses}`);
	}
	addWin(){
		this.wins += 1;
		return this.wins;
	}
	addLoss(){
		this.losses += 1;
		return this.losses;
	}

}
function battle(fighter1, fighter2){
	if(fighter1.getHealth() === 0){
		console.log(`${fighter1.getName()} is dead and can't fight.`);
		return;
	} else if(fighter2.getHealth() === 0){
		console.log(`${fighter2.getName()} is dead and can't fight.`);
		return;
	}
	while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0){
	console.log(fighter1.attack(fighter2));
	console.log(fighter2.attack(fighter1));
	if(fighter2.getHealth() === 0 && fighter1.getHealth() > 0){
		fighter2.addLoss();
		fighter1.addWin();
		console.log(`${fighter1.getName()} wins!`);
		console.log(`${fighter2.getName()} is dead and can't fight.`);
	} else if(fighter1.getHealth() === 0 && fighter2.getHealth() > 0){
		fighter1.addLoss();
		fighter2.addWin();
		console.log(`${fighter2.getName()} wins!`);
		console.log(`${fighter1.getName()} is dead and can't fight.`);
	}
	}
}
const myFighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});
