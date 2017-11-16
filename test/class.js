const { Logger } = require("..");

const info = "test string";


class MyObject extends Logger {
  constructor() {
    super("myobj");
  }

  testDisable() {
    console.log("== Testing disable log ==");
    this.trace(info);
    this.disableLog();
    this.trace(info);
    this.enableLog();
    this.trace(info);
  }

  testColor() {
    console.log("== Testing disable color ==");
    this.trace(info);
    this.disableLogColor();
    this.trace(info);
    this.enableLogColor();
    this.trace(info);
  }

  test() {
    this.testDisable();
    this.testColor();
  }
}


const a = new MyObject();

a.test();
