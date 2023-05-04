class Superclass2 {
  constructor(public isSuper: boolean = true) {}

  protected sayHello(): void {
    console.log('Olá mundo!');
  }
};

const newObjSuper2 = new Superclass2();

class Subclass2 extends Superclass2 {
  sayHello2() {
    super.sayHello();
  }
};

const myFunc2 = (object: Subclass) => {
  object.sayHello();
};

const newObjSub2 = new Subclass2();

myFunc(newObjSuper);
myFunc(newObjSub);

