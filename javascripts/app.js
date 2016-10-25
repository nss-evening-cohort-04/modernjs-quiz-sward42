"use strict";

let robot1Name = $('#robot1-name').val();
let robot2Name = $('#robot2-name').val();
let typeSelected1;
let typeSelected2;
let robot1;
let robot2;
let robot1Status = $('#robot1-status');
let robot2Status = $('#robot2-status');
let robotSelected;

$("#robot1-type").change((event) =>{
	console.log($(event.target).val());
	typeSelected1 = $(event.target).val();
});

$("#robot2-type").change((event) =>{
    console.log($(event.target).val());
    typeSelected2 = $(event.target).val();
});



$("#generate-robot1").click((event) =>{
	generateRobot(typeSelected1, "robot1");
    printRobotToDom(robot1Status, robot1, typeSelected1);
});

$("#generate-robot2").click((event) =>{
    generateRobot(typeSelected2, "robot2");
    printRobotToDom(robot2Status, robot2, typeSelected2);
});


function generateRobot(type, player) {
    $.each(Robot.Combatants, (key, value) => {
      if(key === type) {
        // index applies the current function
        console.log("typeSelected1", type);
        robotSelected = (new value());
        // update HP based on $classSelected
        if(player === 'robot1'){
            robotSelected.setName($('#robot1-name').val());
            robot1 = robotSelected;
        }else if(player === 'robot2'){
            robotSelected.setName($('#robot2-name').val());
            robot2 = robotSelected;
        }else {
            console.log("no player selected");
        }
        
        console.log("robot1", robotSelected);
        }
    });
}

function printRobotToDom(divId, robot, type) {
    $(divId).html(`<div><h2>${robot.name} the ${type}</h2></div>
                    <div><h3>Life points: ${robot.life}</h3>
                    <div><h3>Weapon: ${robot.weapon}</h3></div>`);
}



$("#attack-btn").click((event) =>{
    event.preventDefault();

    if (robot2.life > 0 && robot1.life > 0) {
    robot1.attack(robot2, robot1);
    }
    if (robot1.life > 0 && robot2.life > 0) {
        robot2.attack(robot1, robot2);
    }

    printRobotToDom(robot1Status, robot1, typeSelected1);
    printRobotToDom(robot2Status, robot2, typeSelected2);

});

$("#battle-stats").scrollTop = $("#battle-stats").scrollHeight;




