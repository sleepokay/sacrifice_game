class Deity {
  constructor(name) {
    this.name = name;
    this.level = 0;
    this.preferences = {"child": 1, "adult": 1, "elder": 1, "slave": 1}
    this.price = 5
  }

  setPrefs(child, adult, elder, slave) {
    this.preferences["child"] = child;
    this.preferences["adult"] = adult;
    this.preferences["elder"] = elder;
    this.preferences["slave"] = slave;
  }
}