var vehicles;
(function (vehicles) {
    var Car = (function () {
        function Car(type, color) {
            this.type = type;
            this.color = color;
            this.drive = function (direction) {
                console.log("Driving a " + this.color + " " + this.type + direction);
                return 10;
            };
        }
        return Car;
    })();
    vehicles.Car = Car;    
})(vehicles || (vehicles = {}));
var car = new vehicles.Car("beetle", "red");
var vehicles = new Array();
vehicles.push(car);
for(var i = 0; i < vehicles.length; i++) {
    var vehicle = vehicles[i];
    vehicle.drive("north");
}
//@ sourceMappingURL=app.js.map
