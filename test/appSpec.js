describe("func", function () {
    it("should work", function () {
        expect(doSomething(function (a, b) {
            return a + b;
        }, 1, 2)).toBe(3);
    });
});
//@ sourceMappingURL=appSpec.js.map
