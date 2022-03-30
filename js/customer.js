"use strict";
class Customer {
    constructor(id = 0, name = "", sales = 0) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }
    log() {
        console.log(`${this.id} | ${this.name} | ${this.sales}`);
    }
}
