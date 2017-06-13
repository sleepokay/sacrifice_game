function Player() {
	this.grain = 100;
	this.productivity = 1;
	this.population = {};

	this.initialize = function(size) {
		// temporary: should find better way to represent 
		// population/age structure for easier sampling
		var distribution = {"children": 6,
							"warriors": 10,
							"farmers": 21,
							"mothers": 6,
							"maidens": 4,
							"elders": 3}

		var temp = {"children": [],
					"warriors": [],
					"farmers": [],
					"mothers": [],
					"maidens": [],
					"elders": []};

		for (var key in temp) {
			console.log(key);
			for (var n = 0; n < distribution[key]; n++) {
				if (key == "mothers")
					temp[key].push(new Mother());
				else
					temp[key].push(new Person(key));
			}
		}

		this.population = temp;
	}

	this.popCount = function() {
		var count = 0;
		for (var key in this.population) {
			count += this.population[key].length;
		}
		return count;
	}

	this.update = function() {
		for (var key in player.population) {
			for (var i = 0; i < player.population[key].length; i++) {
				player.population[key][i].update();
			}
		}
	}
}

function Person(type) {
	this.type = type;

	this.initializeAge = function() {
		var range = [];
		if (type == "children")
			range = [0, 13];
		else if (type == "elders")
			range = [50, 75];
		else
			range = [13, 50];

		return Math.floor(Math.random() * (range[1] - range[0]) + range[0]);
	}

	this.age = this.initializeAge();

	this.isChild = function() {
		return this.age < 13;
	}
}
	Person.prototype.update = function() {
		if (this.type == "mothers")
			;
	}

function Mother() {
	Person.call(this, "mothers");
	this.pregnancy = -1;

	this.update = function() {
		Person.prototype.update.call(this);
		
		if (pregnancy != -1) {
			pregnancy++;

			if (pregnancy > 9) {
				;
			}
		}
	}
}
Mother.prototype = new Person();