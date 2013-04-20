/// <reference path="../app/app.ts"/>
/// <reference path="../jasmine/jasmine.d.ts"/>

describe("func", ()=> {
	it("should work", ()=> {
		expect(doSomething((a, b)=> {
			return a + b
		}, 1, 2)).toBe(3);
	})
});
