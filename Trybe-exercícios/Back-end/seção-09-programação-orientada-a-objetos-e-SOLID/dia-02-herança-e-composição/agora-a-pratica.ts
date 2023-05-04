// exercício 1
export default class Person {
  protected MINIMUM_NAME_LENGTH = 3;
  protected MAXIMUM_AGE = 120;

  constructor(
    private _name: string,
    private _birthDate: Date,
  ) {
    this.validatePerson(); // validação do objeto criado com o construtor da classe
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(date: Date) {
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH) {
      throw new Error(`O nome deve conter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`);
    }
  }

  private validateBirthDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(date) > this.MAXIMUM_AGE) {
      throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
    }
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateBirthDate(this.birthDate);
  }
}

const person1 = new Person('Gabriel', new Date(1987, 6, 14));
const person2 = new Person('Gael', new Date(2022, 2, 25));

// exercício 2
class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante pode possuir no máximo 4 notas de provas.');
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante pode possuir no máximo 2 notas de trabalhos.');

    this._assignmentsGrades = value;
  }

  get sumGrades() {
    return { sumexamsGrades: this._examsGrades.reduce((acc, curr) => acc + curr) };
  }
  get sumAverageGrades() {
    return { averageexamsGrades: this._examsGrades.reduce((acc, curr) => acc + curr) / this._examsGrades.length}
  }
  generateEnrollment() {
    const randomArrayCharacters = [...this.name.split(''), ...this.birthDate.getFullYear().toString().split('')].filter((element) => element !== ' ').sort(() => 0.5 - Math.random()).join('');

    if (randomArrayCharacters.length < 16) throw new Error('Nome inválido para criação de matrícula');
    return randomArrayCharacters;
  }
}

const newStudent1 = new Student('Gabriel Aguiar Dantas', new Date(1987, 6, 14));
const newStudent2 = new Student('Gabriela Pereira Martinez', new Date(1996, 4, 23));
const newStudent3 = new Student('Geovani Silva Junior', new Date(1999, 2, 24));
const newStudent4 = new Student('Gabriel Ferreira Gomes', new Date(1994, 5, 7));
const newStudent5 = new Student('Christopher Ju Aguiar Dantas', new Date(1987, 6, 14));

// exercício 3

interface Employee {
  registration: number | string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string;
}

// exercício 4

class Subject {
  constructor(private _name: string) {
    this.validateName(_name);
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this.validateName(name);
    this._name = name;
  }
  private validateName(name: string) {
    if (name.length < 3) throw new Error('A matéria deve possuir mais de 3 caracteres!');
    return this._name = name;
  }
}

const matematica = new Subject('Matematica');
const historia = new Subject('Historia');
const filosofia = new Subject('Filosofia');

// exercício 5

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _admissionDate: Date;

  constructor(subject: Subject, name: string, birthDate: Date, private _salary: number) {
    super(name, birthDate);
    this._subject = subject;
    this.validateSalary(_salary);
    this._admissionDate = new Date();
    this._registration = this.generateRegistration(); 
  }

  validateSalary(salary: number) {
    if (salary < 0) throw new Error('Salário não pode ser negativo!');
    return this._salary = salary;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(salary: number) {
    this.validateSalary(salary);
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}

const newTeacher1 = new Teacher(new Subject('Matematica'), 'Punkes Silva Sauro', new Date(1987, 6, 14), 8000);

console.log(newTeacher1.salary);