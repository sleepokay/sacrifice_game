const monthLength = 1000; // in real-time units (milliseconds)
const yearLength = 12; // in months

class Game {

	constructor() {
		this.sun = 0;
		this.rain = 0;
		this.chance = [-1, 1];

		this.grain = 100;
		this.productivity = 1;
		this.population = this.newPop();

		this.timeElapsed = 0;
		this.month = 0;
		this.year = 1;

	}

	update(delta) {
		this.timeElapsed += delta;

		if (this.timeElapsed % monthLength == 0) {
			this.updatePop();
			
			this.month++;
			this.timeElapsed = 0;

			if (this.month % yearLength == 0) {
				this.year++;
				this.month = 0;
			}
		}
	}

	updatePop() {
		for (var key in this.population) {
			for (var i = 0; i < this.population[key].length; i++) {
				this.population[key][i].update();
			}
		}
	}

	newPop() {
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
		return temp;
	}

	popCount() {
		var count = 0;
		for (var key in this.population) {
			count += this.population[key].length;
		}
		return count;
	}
}