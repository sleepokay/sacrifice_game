// player contains the variables related to population
var player;

// environmental variables
var sun;
var rain;
var chance = [-1, 1];

// time variables
var delta = 100; // in milliseconds
var timeElapsed;
var year;
var season;

const yearLength = 12000;
const MONTHS = ["Ixo", "Nexo", "Sah", "Shodo", "Goru", "Loxu", "Xin", "Bah", "Noru", "Jio", "Jixo", "Jinx"];
const SEASONS = ["spring", "spring", "spring", 
					"summer", "summer", "summer", 
					"fall", "fall", "fall",
					"winter", "winter", "winter"];

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
	stats += "<br>Month " + (season+1) + ": " + MONTHS[season];
	stats += "<br>Season: " + SEASONS[season];
	$('#environment').html(stats);

	stats = "Population: " + player.popCount();

	for (var key in player.population) {
		stats += "<br>" + key + ": " + player.population[key].length;
	}

	$('#population').html(stats);
}

function update() {
	timeElapsed += delta;

	if (timeElapsed % yearLength == 0)
		year++;
	if (timeElapsed > yearLength)
		timeElapsed -= yearLength;
	season = Math.floor(timeElapsed%yearLength/1000);
}