"use strict";

let Robot =((mainRobot)=>{
//Main Robot Prototype

mainRobot.BaseRobot = ()=> {
	this.name = "null";
	this.type = "null";
	this.life = 100;
	this.baseDamage = Math.floor(Math.random() *10);
};

mainRobot.BaseRobot.prototype.setName = (newName)=> {
	this.name = newName;
};

mainRobot.BaseRobot.prototype.setType = (newType)=> {
	this.type = newType;
};

mainRobot.BaseRobot.prototype.attack = function(target){
    this.totalDamage = this.baseDamage + this.weapon.damage;
    target.life -= this.totalDamage;
};

	return mainRobot;
} (Robot || {}));



let Robot = ((robotClasses) => {
//1st Type: Aerial

 let AerialDrone = () =>{
	this.type = "Drone";
	this.attackType = "Aerial";
};

AerialDrone.prototype = new Robot();

let Drogon = () =>{
	this.baseDamage += 15;
	this.life = Math.floor(Math.random() * (100 - 60 + 1) + 60);
};

Drogon.prototype = new AerialDrone(); 

let Pteranabomb = () =>{
	this.baseDamage += 10;
	this.life = Math.floor(Math.random() * (150 - 50 + 1) + 50);
};

Pteranabomb.prototype = new AerialDrone();

//2nd Type: Ground

let GroundRobot = () =>{
	this.type = "ATV";
	this.attackType = "Ground";
};

GroundRobot.prototype = new Robot();

let BigCroc = () =>{
	this.baseDamage += 30;
	this.life = Math.floor(Math.random() * (175 - 80 + 1) + 80);
};

BigCroc.prototype = new GroundRobot();

let Tricerabot = () =>{
	this.baseDamage += 10;
	this.life = Math.floor(Math.random() * (130 - 60 + 1) + 60);
};

Tricerabot.prototype = new GroundRobot();

//3rd Type: Subterranean

let BunkerBot = () =>{
	this.type = "Subterranean";
	this.attackType = "Underground";
};

BunkerBot.prototype = new Robot();

let MoleTroll = () =>{
	this.baseDamage += 20;
	this.life = Math.floor(Math.random() * (90 - 50 + 1) + 50);
};

MoleTroll.prototype = new BunkerBot();

let ElectroWorm = () =>{
	this.baseDamage += 15;
	this.life = Math.floor(Math.random() * (110 - 50 + 1) + 50);

};

ElectroWorm.prototype = new BunkerBot();

	return robotClasses;
} (Robot || {}));











