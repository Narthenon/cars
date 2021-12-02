/*
* File: ButtonPanel.java
* Author: Barabás Gergő
* Copyright: 2021, Barabás Gergő
* Group: Szoft V
* Date: 2021-12-02
* Github: https://github.com/Narthenon/
* Licenc: GNU GPL
*/

import {icar} from './car';
class car implements icar{

    id = 1;
    plate = "ADG-284";
    color = "fehér";
    brand = "Opel";
    year = 1998;
    capacity = 1400;
    fuel = "benzin";
    price = 260000;
    sold = true;
}
let auto = new car();
console.log
    (
    auto.id,
    auto.plate,
    auto.color,
    auto.brand,
    auto.year,
    auto.capacity,
    auto.fuel,
    auto.price,
    auto.sold
    );


