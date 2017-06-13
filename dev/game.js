// player contains the variables related to population
var player;

// environmental variables
var sun;
var rain;
var chance = [-1, 1];

// time variables
const yearLength = 12; // in months
const monthLength = 1000; // in milliseconds
const delta = 100; // in milliseconds: how often update gets called
var timeElapsed;
var year;
var season;

$(document).ready( function() {
	newGame();
});

function newGame() {
	player = new Player();
	timeElapsed = 0;
	year = 1;
	month = 0;
	
	window.setInterval( function() {
		draw();
	}, delta);
}

function draw() {
	update();

	var stats = "";

	// environment stats
	stats = "Sun: ";
	stats += "Rain: ";


	// time stats
	stats = "Time Elapsed: " + timeElapsed;
	stats += "<br>Year: " + year;
	stats += "<br>Month " + (month+1);
	$('#time').html(stats);

	// population stats
	stats = "Population: " + player.popCount();
	for (var key in player.population) {
		stats += "<br>" + key + ": " + player.population[key].length;
	}
	stats += "<br><br>Grain: " + player.grain;
	$('#population').html(stats);
}

function update() {
	timeElapsed += delta;

	if (timeElapsed % monthLength == 0) {
		month++;
		timeElapsed -= monthLength;
		
		if (month % yearLength == 0) {
			year++;
			month = 0;
		}
	}
}

function updateYear() {
	for (var key in player.population) {
		for (var p in player.population[key]) {
			;
		}
	}
}