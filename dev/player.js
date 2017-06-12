class Player {
	constructor() {
		this.grain = 100;
		this.productivity = 1;

		this.population = {};
		this.initialize(50);
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
}

class Person {
	constructor(type) {
		var range = [];

		if (type == "children")
			range = [0, 13];
		else if (type == "elders")
			range = [50, 75];
		else
			range = [13, 50];
		this.age = Math.floor(Math.random() * (range[1] - range[0]) + range[0]);
	}

	isChild() {
		return this.age < 13;
	}
}