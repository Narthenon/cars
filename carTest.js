/*
* File: ButtonPanel.java
* Author: Barabás Gergő
* Copyright: 2021, Barabás Gergő
* Group: Szoft V
* Date: 2021-12-02
* Github: https://github.com/Narthenon/
* Licenc: GNU GPL
*/
/*const car = require("car");
const { car } = require("car");
import car = require("car");
import * as Car from "car";
import { car, CarInstance } from "car";
import car from "car";
import car, { CarInstance } from "car";
*/
var Name = "Barabás Gergő";
console.log(Name);
var car = new Car();
car.id = 1;
car.plate = "ADG-284";
car.color = "fehér";
car.brand = "Opel";
car.year = 1998;
car.capacity = 1400;
car.fuel = "benzin";
car.price = 260000;
car.sold = true;
console.log(car.id, car.plate, car.color, car.brand, car.year, car.capacity, car.fuel, car.price, car.sold);
