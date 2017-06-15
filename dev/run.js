var game;

// timing variables
const delta = 100;

$(document).ready( function() {
	game = new Game();

	window.setInterval(function() {
		draw();
	}, delta);
});

function draw() {
	update();

	var stats = "";

	// environment stats
	stats = "Sun: " + game.sun;
	stats += "<br>Rain: " + game.rain;
	stats += "<br>Chance: " + game.chance;
	stats += "<br>Wisdom: " + game.wisdom;

	$('#environment').html(stats);

	// time stats
	stats = "Time Elapsed: " + game.timeElapsed;
	stats += "<br>Year: " + game.year;
	stats += "<br>Month " + (game.month+1);
	$('#time').html(stats);

	// population stats
	stats = "Population: " + game.popCount() + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "Grain: " + game.grain;

	for (var key in game.pop) {
		stats += "<br>" + key + ": " + game.pop[key].length;
	}
	$('#population').html(stats);

	// $('#pop-histogram')
}

function update() {
	game.update(delta);
}