"use strict";
var gol = {
    doors: 4,
    bodyStyle: 'hatch',
    productionYearDate: 2013,
    yearsPassed: function () {
        console.log("O ve\u00EDculo j\u00E1 tem " + (new Date().getFullYear() - this.productionYearDate) + " anos de uso");
    }
};
gol.yearsPassed();
var miau = {
    size: 'big',
    breed: 'ragdoll',
    weigth: 15,
    catDetails: function () {
        console.log("My cat is " + this.size + " with " + this.weigth + " kg and he is a " + this.breed);
    }
};
miau.catDetails();
var airbus = {
    size: 2.5,
    name: 'Airbus C430',
    type: 'Passenger transport',
    airplaneDetails: function () {
        console.log("The " + this.name + " is a " + this.size + " tons " + this.type + " airplane");
    },
};
airbus.airplaneDetails();
