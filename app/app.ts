/**
 *  Classes follow the ES6 proposed spec
 */

class Car{
	constructor(public type:string, public color:string){}

	drive(direction:string){
		console.log("Driving a " + this.color + " " + this.type + direction);
	}
}

var car = new Car("beetle", "red");
car.drive("north");