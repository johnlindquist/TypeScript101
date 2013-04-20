/// <reference path="../app/app.ts"/>
/// <reference path="../jasmine/jasmine.d.ts"/>

describe("func", ()=> {
	it("should work", ()=> {
		var car = <Car>CarFactory.makeCar();
		expect(car.color).toBe("red");
	})
});
