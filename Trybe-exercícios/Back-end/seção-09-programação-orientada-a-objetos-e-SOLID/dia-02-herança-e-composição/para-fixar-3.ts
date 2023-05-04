class Superclass3 {
  constructor(public isSuper: boolean = true) {}

  public sayHello(): void {
    console.log('Olá mundo!');
  }
};

const newObjSuper3 = new Superclass3();

class Subclass3 extends Superclass3 {
  constructor() {
    super();
    this.isSuper = false;
  }
};

const myFunc3 = (object: Superclass3) => {
  object.sayHello();
  console.log(object.isSuper ?  'Super!!!' : 'Sub!!!');
};

const newObjSub3 = new Subclass3();

myFunc3(newObjSuper3);
myFunc3(newObjSub3);

