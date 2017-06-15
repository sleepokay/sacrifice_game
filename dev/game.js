const monthLength = 2000; // in real-time units (milliseconds)
const yearLength = 12; // in months

class Game {

	constructor() {

		// environment & pop
		this.sun = 0;
		this.rain = 0;
		this.chance = 1;
		this.wisdom = 0.1;

		this.grain = 100;
		this.pop = this.newPop();

		// skills & multipliers
		this.farming = 1;
		this.war = 1;
		this.wisdom = 1;
		this.fertility = 0.05;

		// time variables
		this.timeElapsed = 0;
		this.month = 0;
		this.year = 1;

	}

	update(delta) {
		this.timeElapsed += delta;

		if (this.timeElapsed % monthLength == 0) {
			this.updatePopMonth();
			
			this.month++;
			this.timeElapsed = 0;

			if (this.month % yearLength == 0) {
				this.updatePopYear();
				this.year++;
				this.month = 0;
			}
		}
	}

	updatePopMonth() {
		for (var key in this.pop) {
			for (var i = 0; i < this.pop[key].length; i++) {

			}

			if (key == "adult") {
				// generate children according to birthrate
				let birth = Math.floor(Math.random() * this.pop[key].length * this.fertility);

				if (birth > 0)
					this.pop["child"].push(new Person("child", 0));
			}
		}
	}

	updatePopYear() {
		for (var key in this.pop) {
			for (var i = 0; i < this.pop[key].length; i++) {

				// check if person has died of old age
				if (this.pop[key][i].age > 65) {
					this.pop[key].splice(i, 1);
				}
				else {
					// age person
					this.pop[key][i].birthday();
					
					// move to next age group if applicable
					if (this.pop[key][i].type == "child" && this.pop[key][i].age > 15) {
						let temp = this.pop[key].splice(i, 1)[0];
						temp.type = "adult";
						this.pop["adult"].push(temp);
					}
					else if (this.pop[key][i].type == "adult" && this.pop[key][i].age > 40) {
						let temp = this.pop[key].splice(i, 1)[0];
						temp.type = "elder";
						this.pop["elder"].push(temp);
					}
				}
			}
		}
	}

	newPop() {
		// temporary: should find better way to represent 
		// population/age structure for easier sampling
		let distribution = {"child": 10, "adult": 30, "elder": 5, "slave": 5}
		let temp = {"child": [], "adult": [], "elder": [], "slave": []};

		for (let key in temp) {
			console.log(key);
			for (let n = 0; n < distribution[key]; n++) {
				// age ranges for randomization
				let range = [];
				if (this.type == "child")
					range = [0, 15];
				else if (this.type == "adult")
					range = [15, 40];
				else
					range = [40, 65];
				let age = Math.floor(Math.random() * (range[1] - range[0]) + range[0]);
				temp[key].push(new Person(age));
			}
		}
		return temp;
	}

	popCount() {
		var count = 0;
		for (var key in this.pop) {
			count += this.pop[key].length;
		}
		return count;
	}
}