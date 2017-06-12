var grain;
var population;
var slaves;

var sun;
var rain;
var war;
var chance;
var foodProduction;

var delta;

$(document).ready( function() {
	// window.innerWidth;
	// window.innerHeight;
	grain = 50;
	people = 200;
	slaves = 0;
	delta = Date.now();
	foodProduction = 1;

	chance = [-1, 1];

	window.setInterval( function() {
		draw();
	}, 100);
});

function draw() {
	update();
}

function update() {
	var timeElapsed = Date.now() - delta;
	delta = Date.now();
	$('#main').html("Time: " + timeElapsed);


	$('#people').html("People: " + people);
	$('#slaves').html("Slaves: " + slaves);
	$('#grain').html("Grain: " + grain);
	
}