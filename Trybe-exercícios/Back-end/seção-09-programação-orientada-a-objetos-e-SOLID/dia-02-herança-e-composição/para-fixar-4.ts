interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(
    public myNumber: number
  ) {
    this.myNumber = myNumber;
    }
    myFunc(myParam: number): string {
      return `${this.myNumber + myParam} valor da string qualquer`
  }
}

const myClassObj = new MyClass(4);

console.log(myClassObj.myFunc(4));