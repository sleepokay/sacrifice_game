class Player {

	constructor() {
		this.grain = 100;
		this.productivity = 1;
		this.population = {};
	}

	initialize(size) {
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

	popCount() {
		var count = 0;
		for (var key in this.population) {
			count += this.population[key].length;
		}
		return count;
	}

	update() {
		for (var key in player.population) {
			for (var i = 0; i < player.population[key].length; i++) {
				player.population[key][i].update();
			}
		}
	}
}