class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello(): void {
    console.log('Olá mundo!');
  }
};

const newObjSuper = new Superclass();

class Subclass extends Superclass {};

const myFunc = (object: Superclass) => {
  object.sayHello();
};

const newObjSub = new Subclass();

myFunc(newObjSuper);
myFunc(newObjSub);

