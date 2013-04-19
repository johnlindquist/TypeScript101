var Car = (function () {
    function Car(type, color) {
        this.type = type;
        this.color = color;
    }
    Car.prototype.drive = function (direction) {
        console.log("Driving a " + this.color + " " + this.type + direction);
    };
    return Car;
})();
var car = new Car("beetle", "red");
car.drive("north");
//@ sourceMappingURL=app.js.map
