class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }   
    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    get speedUS(){
        return this.speed / 1.6;
    }
    set speedUS(speed){
        this.speed = speed * 1.6;
    }
    
}

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
console.log(bmw.speedUS)
bmw.speedUS = 50;
console.log(bmw.speedUS);