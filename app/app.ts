/**
 *  functions
 */

interface Car{
	color:string;
}

class CarFactory{
	static makeCar(){
		return {
			color: "red",
			type: "fast"
		}
	}
}

//var car = <Car>CarFactory.makeCar();

