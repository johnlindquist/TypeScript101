var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Wally = (function () {
    function Wally() { }
    Wally.prototype.race = function () {
        return "jog";
    };
    return Wally;
})();
var Flash = (function (_super) {
    __extends(Flash, _super);
    function Flash() {
        _super.apply(this, arguments);

    }
    Flash.prototype.race = function () {
        return "run";
    };
    return Flash;
})(Wally);
//@ sourceMappingURL=app.js.map
