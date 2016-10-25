"use strict";

var Robot =(function(mainRobot){

	mainRobot.Combatants = {};
	//Main Robot Prototype

	mainRobot.Combatants.BaseRobot =  function(){
		this.name = "ROBOT";
		this.type = "null";
		this.life = 100;
		this.weapon = "null";
		this.baseDamage = Math.floor(Math.random() *10);
	};

	mainRobot.Combatants.BaseRobot.prototype.setName = function(newName) {
		this.name = newName;
	};

	mainRobot.Combatants.BaseRobot.prototype.setType = function(newType) {
		this.type = newType;
	};

	mainRobot.Combatants.BaseRobot.prototype.setWeapon = function(newWeapon) {
		this.weapon = newWeapon;
	};

	mainRobot.Combatants.BaseRobot.prototype.attack = function(target, attackingRobot){
	    this.totalDamage = this.baseDamage + Math.floor(Math.random() * (10 - 1 + 1) + 1);
	    target.life -= this.totalDamage;
	    $('#battle-stats').append(`<h3>${attackingRobot.name} attacks ${target.name} with a ${attackingRobot.weapon} and scores ${this.totalDamage} hit points.</h3>`);
	    
	    
	    if (target.life <= 0) {
	    	target.life = 0;
	    	$('#battle-stats').html(`<h2>${attackingRobot.name} has defeated ${target.name} with a ${attackingRobot.weapon}!</h2>`);
	    } else if (attackingRobot.life <= 0){
	    	attackingRobot.life = 0;
	    	$('#battle-stats').html(`<h2>${target.name} has defeated ${attackingRobot.name} with a ${target.weapon}!</h2>`);
	    }
	};

	//1st Type: Aerial

	mainRobot.Combatants.AerialDrone = function() {
		this.type = "Drone";
		this.attackType = "Aerial";
	};

	mainRobot.Combatants.AerialDrone.prototype = new mainRobot.Combatants.BaseRobot();

	mainRobot.Combatants.Drogon = function() {
		this.baseDamage += 15;
		this.life += Math.floor(Math.random() * (100 - 60 + 1) + 60);
		this.weapon = "Flamethrower";
	};

	mainRobot.Combatants.Drogon.prototype = new mainRobot.Combatants.AerialDrone(); 

	mainRobot.Combatants.Pteranabomb = function() {
		this.baseDamage += 10;
		this.life += Math.floor(Math.random() * (150 - 50 + 1) + 50);
		this.weapon = "Boulder";
	};

	mainRobot.Combatants.Pteranabomb.prototype = new mainRobot.Combatants.AerialDrone();

	//2nd Type: Ground

	mainRobot.Combatants.GroundRobot = function() {
		this.type = "ATV";
		this.attackType = "Ground";
	};

	mainRobot.Combatants.GroundRobot.prototype = new mainRobot.Combatants.BaseRobot();

	mainRobot.Combatants.BigCroc = function() {
		this.baseDamage += 30;
		this.life += Math.floor(Math.random() * (175 - 80 + 1) + 80);
		this.weapon = "Club";
	};

	mainRobot.Combatants.BigCroc.prototype = new mainRobot.Combatants.GroundRobot();

	mainRobot.Combatants.Tricerabot = function() {
		this.baseDamage += 10;
		this.life += Math.floor(Math.random() * (130 - 60 + 1) + 60);
		this.weapon = "Spear";
	};

	mainRobot.Combatants.Tricerabot.prototype = new mainRobot.Combatants.GroundRobot();

	//3rd Type: Subterranean

	mainRobot.Combatants.BunkerBot = function(){
		this.type = "Subterranean";
		this.attackType = "Underground";
	};

	mainRobot.Combatants.BunkerBot.prototype = new mainRobot.Combatants.BaseRobot();

	mainRobot.Combatants.MoleTroll = function(){
		this.baseDamage += 20;
		this.life += Math.floor(Math.random() * (90 - 50 + 1) + 50);
		this.weapon = "Shovel";
	};

	mainRobot.Combatants.MoleTroll.prototype = new mainRobot.Combatants.BunkerBot();

	mainRobot.Combatants.ElectroWorm = function(){
		this.baseDamage += 15;
		this.life += Math.floor(Math.random() * (110 - 50 + 1) + 50);
		this.weapon = "Taser Gun";

	};

	mainRobot.Combatants.ElectroWorm.prototype = new mainRobot.Combatants.BunkerBot();


	return mainRobot;
} (Robot || {}));


// //1st Type: Aerial

// let AerialDrone = function() {
// 	this.type = "Drone";
// 	this.attackType = "Aerial";
// };

// AerialDrone.prototype = new Robot();

// let Drogon = function() {
// 	this.baseDamage += 15;
// 	this.life = Math.floor(Math.random() * (100 - 60 + 1) + 60);
// };

// Drogon.prototype = new AerialDrone(); 

// let Pteranabomb = function() {
// 	this.baseDamage += 10;
// 	this.life = Math.floor(Math.random() * (150 - 50 + 1) + 50);
// };

// Pteranabomb.prototype = new AerialDrone();

// //2nd Type: Ground

// let GroundRobot = function() {
// 	this.type = "ATV";
// 	this.attackType = "Ground";
// };

// GroundRobot.prototype = new Robot();

// let BigCroc = function() {
// 	this.baseDamage += 30;
// 	this.life = Math.floor(Math.random() * (175 - 80 + 1) + 80);
// };

// BigCroc.prototype = new GroundRobot();

// let Tricerabot = function() {
// 	this.baseDamage += 10;
// 	this.life = Math.floor(Math.random() * (130 - 60 + 1) + 60);
// };

// Tricerabot.prototype = new GroundRobot();

// //3rd Type: Subterranean

// let BunkerBot = () =>{
// 	this.type = "Subterranean";
// 	this.attackType = "Underground";
// };

// BunkerBot.prototype = new Robot();

// let MoleTroll = () =>{
// 	this.baseDamage += 20;
// 	this.life = Math.floor(Math.random() * (90 - 50 + 1) + 50);
// };

// MoleTroll.prototype = new BunkerBot();

// let ElectroWorm = () =>{
// 	this.baseDamage += 15;
// 	this.life = Math.floor(Math.random() * (110 - 50 + 1) + 50);

// };

// ElectroWorm.prototype = new BunkerBot();

	









