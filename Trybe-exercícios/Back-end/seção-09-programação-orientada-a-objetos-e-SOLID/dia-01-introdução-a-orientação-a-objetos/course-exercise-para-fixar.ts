class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string;
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string, connectedTo: string) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(newValue: string) {
    if (this._connections.includes(newValue)) {
      this._connectedTo = newValue
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
  
  turnOn() {
      console.log(` TV da marca ${this._brand}, com tamanho ${this._size}, resolução ${this._resolution} e ${this._connections} conexões disponíveis`);
  }
}

/* 
métodos que eu usei sem saber como funcionam por 'baixo dos panos'
1- window.alert
2- console.log
3- JSON.parse 
*/

const newTv = new Tv('Samsung', 50, '4k', 'HDMI , VGA, DisplayPort', 'HDMI');
newTv.connectedTo = 'DisplayPort';
console.log(newTv.connectedTo);