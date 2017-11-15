const { Logger } = require("..");


class MyObject extends Logger {
  constructor() {
    super("myobj");
  }

  test() {
    this.trace("deafult");
    this.info("deafult");
    this.disableLog();
    this.trace("after disableLog");
    this.info("after disableLog");
    this.enableLog();
    this.trace("after enableLog");
    this.info("after enableLog");
  }
}


const a = new MyObject();

a.test();
