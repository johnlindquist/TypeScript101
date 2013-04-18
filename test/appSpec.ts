/// <reference path="../jasmine/jasmine.d.ts"/>
/// <reference path="../app/app.ts"/>
describe("Does something", ()=> {
		it("should do something", ()=> {
			var someClass = new foo.SomeClass("foo");
			expect(someClass.someValue).toBe("foo");

		})
	}
);

describe("Does something", ()=> {
		it("should do something", ()=> {
			var someClass:foo.SomeClass = new foo.SomeClass("foo");

			expect(someClass.someValue).toBe("foo");
		})
	}
);