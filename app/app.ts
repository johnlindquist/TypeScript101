/**
 *  modules
 */

module vehicles{

	export interface Drivable{
		type:string;
		drive: (direction:string) => number;
	}

	export class Car implements Drivable {
		constructor(public type:string, public color:string) {
		}

		drive = function (direction:string):number {
			console.log("Driving a " + this.color + " " + this.type + direction);
			return 10;
		};
	}
}


var car:vehicles.Drivable = new vehicles.Car("beetle", "red");

var vehicles:vehicles.Drivable[] = new vehicles.Drivable[];
vehicles.push(car);

for (var i = 0; i < vehicles.length; i++) {
	var vehicle:vehicles.Drivable = vehicles[i];
	vehicle.drive("north");
}


