/// <reference path="../app/app.ts"/>
/// <reference path="../jasmine/jasmine.d.ts"/>

describe("inheritance", ()=> {
	it("should work", ()=> {
		expect(new Wally().race()).toBe("jog");
		expect(new Flash().race()).toBe("run");
	})
});