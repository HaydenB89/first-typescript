class Customer{
    id: number;
    name: string;
    sales: number;

    constructor(id: number = 0, name: string = "", sales: number = 0) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }

    log() {
        console.log(`${this.id} | ${this.name} | ${this.sales}`);
        
    }

}