//問１
let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(num) {
        if(num % 2 ===0) {
            console.log(num + "は偶数です")
    }
}
numbers.forEach(isEven);

//問２
class Car {
    constructor(gass, num) {
        this.gass = gass;
        this.num = num;
    }
getNumGas() {
    console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です`);
    }
}
let car = new Car('24.8', 8888);
car.getNumGas();