var player;

var sun;
var rain;

var delta = 100; // in milliseconds
var timeElapsed;
var year;
var season;

const SEASONS = ["spring 1", "spring 2", "spring 3", 
					"summer 1", "summer 2", "summer 3", 
					"fall 1", "fall 2", "fall 3",
					"winter 1", "winter 2", "winter 3"];

$(document).ready( function() {
	newGame();
});

function newGame() {
	player = new Player();
	timeElapsed = 0;
	year = 1;
	
	window.setInterval( function() {
		draw();
	}, delta);
}

function draw() {
	update();

	var stats = "";
	stats += "Time Elapsed: " + timeElapsed;
	stats += "<br>Year: " + year;
	stats += "<br>Season: " + SEASONS[season];
	$('#main').html(stats);

	$('#people').html("People: " + player.people);
	$('#slaves').html("Slaves: " + player.slaves);
	$('#grain').html("Grain: " + player.grain);
}

function update() {
	timeElapsed += delta;

	if (timeElapsed % 12000 == 0)
		year++;
	if (timeElapsed > 12000)
		timeElapsed -= 12000;
	season = Math.floor(timeElapsed%12000/1000);
}