interface Logger {
  log(x: string): void;
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(x: string): void {
    console.log(`Este é o log da ConsoleLogger: ${x}`);
  }
}

class ConsoleLogger2 implements Logger {
  public log(x: string) {
    console.log(`Este é o log da ConsoleLogger2: ${x}`);
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  save(key: string, value: string): void {
    this.logger.log(key);
    this.logger.log(value);
  }
};

const newConsoleLoggerObj1 = new ConsoleLogger();
const newConsoleLogger2Obj2 = new ConsoleLogger2();

const ExampleDatabaseObj1 = new ExampleDatabase;
const ExampleDatabaseObj2 = new ExampleDatabase(newConsoleLogger2Obj2);
ExampleDatabaseObj1.save('aquiii', 'é o primeiroooo');
ExampleDatabaseObj2.save('aquiiii', 'é o segundoooo');