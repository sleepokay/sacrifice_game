class Person {
	constructor(age) {
		this.age = age;
		this.setType();
	}

	setType() {
		if (this.age >= 0 && this.age < 13)
			this.type = "child";
		else if (this.age >= 13 && this.age < 40)
			this.type = "adult";
		else if (this.age >= 40)
			this.type = "elder";
	}

	birthday() {
		this.age++;
	}
}