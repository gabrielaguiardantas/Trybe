"use strict";
var Dog = /** @class */ (function () {
    function Dog(name, breed, age) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    Dog.prototype.dogDetails = function () {
        console.log("Meu c\u00E3ozinho se chama " + this.name + ", ela tem " + this.age + " anos e \u00E9 da ra\u00E7a " + this.breed);
    };
    return Dog;
}());
var dog1 = new Dog('Dolly', 'dachshund', 7);
dog1.dogDetails();
var House = /** @class */ (function () {
    function House(rooms, size, district) {
        this.rooms = rooms;
        this.size = size;
        this.district = district;
    }
    House.prototype.houseDetails = function () {
        console.log("A casa a venda tem " + this.rooms + " quartos, tem " + this.size + " m\u00B2 e est\u00E1 localizada em " + this.district);
    };
    return House;
}());
var house1 = new House(4, 200, 'Ilha dos Bentos');
house1.houseDetails();
var Voo = /** @class */ (function () {
    function Voo(origin, destination, departureDate) {
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
    }
    Voo.prototype.flightDetails = function () {
        console.log("O v\u00F4o decola de " + this.origin + " para " + this.destination + " no dia " + this.departureDate);
    };
    return Voo;
}());
var flight1 = new Voo('Rio de Janeiro', 'Vitória', new Date("2023/05/20"));
flight1.flightDetails();
var Love = /** @class */ (function () {
    function Love(lover1, lover2) {
        this.lover1 = lover1;
        this.lover2 = lover2;
    }
    Love.prototype.loveDetails = function () {
        console.log("s2 s2 " + this.lover1 + " ama muito " + this.lover2 + " s2 s2");
    };
    return Love;
}());
var lover3 = new Love('Gabriel', 'Fabrícia');
var lover4 = new Love('Pascoal', 'Luiza');
lover3.loveDetails();
lover4.loveDetails();
