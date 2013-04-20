/// <reference path="one/two/three/four/things.ts"/>
import t = module("one/two/three/four/things")

class Sweeper{
	constructor(public broom:t.stuff.Broom){}

	doJob(){
		this.broom.makeNoise();
	}
}

var sweeper = new Sweeper(new t.stuff.Broom());
sweeper.doJob();