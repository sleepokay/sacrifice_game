// player contains the variables related to population
var player;

// environmental variables
var sun;
var rain;
var chance;

// time variables
const yearLength = 12; // in months
const monthLength = 1000; // in milliseconds
const delta = 100; // in milliseconds: how often update gets called
var timeElapsed;
var year;
var season;

$(document).ready( function() {
	new Game().run();
});

function newGame() {
	player = new Player();
	player.initialize();

	sun = 0;
	rain = 0;
	chance = [-1, 1];

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
	stats = "Sun: " + sun;
	stats += "<br>Rain: " + rain;
	stats += "<br>Chance: [" + chance[0] + ", " + chance[1] + "]";

	$('#environment').html(stats);

	// time stats
	stats = "Time Elapsed: " + timeElapsed;
	stats += "<br>Year: " + year;
	stats += "<br>Month " + (month+1);
	$('#time').html(stats);

	// population stats
	stats = "Population: " + player.popCount() + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "Grain: " + player.grain;;
	for (var key in player.population) {
		stats += "<br>" + key + ": " + player.population[key].length;
	}
	$('#population').html(stats);
}

function update() {
	timeElapsed += delta;

	if (timeElapsed % monthLength == 0) {
		player.update();
		
		month++;
		timeElapsed = 0;

		if (month % yearLength == 0) {
			year++;
			month = 0;
		}
	}
}