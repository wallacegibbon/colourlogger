# Introduction


There are 2 ways to use this package:

1. Use it like normal Logger like Log4js.

```js
const logger1 = require("colourlogger").getLogger("mylog");

logger1.setLevel("INFO");
logger1.info("Hello");
```

2. Extends the Logger class

```js
const { Logger } = require("colourlogger");

class MyObj extends Logger {
  constructor() {
    super("mylog");
  }

  blah() {
    this.info("hi");
    this.disableLog();
  }
}
```

The color can be turned off by:

```js
logger1.disableColor();
```

