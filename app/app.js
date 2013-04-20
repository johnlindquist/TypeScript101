var t = require("./one/two/three/four/things")
var Sweeper = (function () {
    function Sweeper(broom) {
        this.broom = broom;
    }
    Sweeper.prototype.doJob = function () {
        this.broom.makeNoise();
    };
    return Sweeper;
})();
var sweeper = new Sweeper(new t.stuff.Broom());
sweeper.doJob();
//@ sourceMappingURL=app.js.map
