// exercício 1 e 2

class StudentsClass {
  private _registrationNumber: number | string;
  private _name: string;
  private _classgrades: number[];
  private _extraWorkingGrades: number[];

  constructor(registrationNumber: number | string, name: string, classgrades: number[], extraWorkingGrades: number[]) {
    this._registrationNumber = registrationNumber;
    this._name = name;
    this._classgrades = classgrades;
    this._extraWorkingGrades = extraWorkingGrades;
  }

  get sumClassGrades() {
    return { sumClassGrades: this._classgrades.reduce((acc, curr) => acc + curr) };
  }
  get averageClassGrades() {
    return { averageClassGrades: this._classgrades.reduce((acc, curr) => acc + curr) / this._classgrades.length}
  }
}

const newStudent = new StudentsClass(12, 'punkes', [6, 8, 5, 9], [5, 6, 7, 8]);
// console.log(newStudent.sumClassGrades);

// exercício 3 e 4

class RestaurantCustomer {
  private _customerName: string;
  
  constructor(customerName: string) {
    this._customerName = customerName;
  }
}
class OrderItem {
  private _itemName: string;
  public _itemPrice: number;

  constructor(itemName: string, itemPrice: number) {
    this._itemName = itemName;
    this._itemPrice = itemPrice;
  }
}
class Order {
  private _customerName: RestaurantCustomer;
  private _consumption: { itemQuantity: number[], itemOrder: OrderItem[] };
  private _paymentMethod: string;
  
  constructor(customerName: RestaurantCustomer, consumption: { itemQuantity: number[], itemOrder: OrderItem[]}, paymentMethod: string) {
    this._customerName = customerName;
    this._consumption = consumption;
    this._paymentMethod = paymentMethod;
  }

  totalValueOrder() {
    return this._consumption.itemQuantity.reduce((acc, curr, index) => {
      return acc * this._consumption.itemOrder[index - 1]._itemPrice + curr * this._consumption.itemOrder[index]._itemPrice;
    })
  }
  totalValueWithDiscount() {
    if (this._paymentMethod === 'cartão') return (0.9 * this.totalValueOrder()).toFixed(2);
    if (this._paymentMethod === 'dinheiro') return (0.7 * this.totalValueOrder()).toFixed(2);
    return this.totalValueOrder();
  }
}
const customerName1 = new RestaurantCustomer('Punkes');
const OrderItem1 = new OrderItem('coxinha', 2);
const OrderItem2 = new OrderItem('x-tudo', 10);
const Order1 = new Order(customerName1, { itemQuantity: [4, 5], itemOrder: [OrderItem1, OrderItem2]}, 'cartão');
// console.log(Order1.totalValueWithDiscount());

// exercício 5 e 6

const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

class Data {
  private _dia: Number;
  private _mes: Number;
  private _ano: Number;

  constructor(dia: number, mes: number, ano: number) {
    this._dia = dia;
    this._mes = mes;
    this._ano = ano;

    if (dia > 31 || mes > 12) return new Data(0o1, 0o1, 1900);
  }

  getMonthName() {
    return mes[Number(this._mes) - 1];
  }
  isLeapYear() {
    return Number(this._ano) % 4 === 0;
  }
  compare(specificData: Date) {
    if (specificData.getTime() < Date.now()) return 1;
    if (specificData.getTime() === Date.now()) return 0;
    return -1;
  }
  format(formatData: string) {
    if (formatData === 'dd/mm/aaaa') return `${this._dia}/${this._mes}/${this._ano}`;
    if (formatData === 'aaaa-mm-dd') return `${this._ano}-${this._mes}-${this._dia}`;
    if (formatData === 'dd de M de aa') return `${this._dia} de ${mes[Number(this._mes) - 1]} de ${this._ano.toString().substring(2)}`;
    if (formatData === 'dd, M de aaaa') return `${this._dia}, ${mes[Number(this._mes) - 1].toLowerCase()} de ${this._ano}`;
  }
}
const data1 = new Data(14, 0o6, 1987);
console.log(data1.compare(new Date(2050, 0o4, 20)));
console.log(data1.format('dd, M de aaaa'));

