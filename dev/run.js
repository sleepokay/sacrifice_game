var game;

// timing variables
const delta = 50;

$(document).ready( function() {
	game = new Game();

	window.setInterval(function() {
		draw();
	}, delta);

function draw() {
	update();

	drawGods();

	var stats = "";
	// environment stats
	stats = "Sun: " + game.sun;
	stats += "<br>Rain: " + game.rain;
	stats += "<br>Chance: " + game.chance;
	stats += "<br>Wisdom: " + game.wisdom;

	$('#environment').html(stats);

	// time stats
	stats = "Year: " + game.year;
	stats += "<br>Month: " + (game.month+1);
	$('#time').html(stats);

	// population stats
	$('#pop-stat').html("Population: " + game.popCount());

	for (var key in game.pop) {
		$('#' + key + '-stat').html(key + ": " + game.pop[key].length);
	}

	// $('#pop-histogram')
}

function drawGods() {
	let names = ["#chance", "#wisdom", "#war", "#fertility", "#death"];
	for (let i = 0; i < names.length; i++) {
		$(names[i] + ' .name').html(game.gods[i].name);
		$(names[i] + ' .level').html("level: " + game.gods[i].level);
		$(names[i] + ' .price').html("price: " + game.gods[i].price);
		$(names[i] + ' .preferences .child').html("C</br>" + game.gods[i].preferences["child"]);
		$(names[i] + ' .preferences .adult').html("A</br>" + game.gods[i].preferences["adult"]);
		$(names[i] + ' .preferences .elder').html("E</br>" + game.gods[i].preferences["elder"]);
		$(names[i] + ' .preferences .slave').html("S</br>" + game.gods[i].preferences["slave"]);
	}
}

function update() {
	game.update(delta);
}

$('button').click( function() {
	console.log($(this).parent().attr('class'));

	// sacrifice button pressed
	if ($(this).parent().attr('class') == 'sacrifice') {

	}
});

});