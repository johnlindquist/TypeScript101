/**
 *  inheritance
 *  static inheritance broken: http://typescript.codeplex.com/workitem/825
 */

interface Person{
	race():void;
}

class Wally implements Person{
	race():string{
		return "jog";
	}
}

class Flash extends Wally{
	race():string{
		return "run";
	}
}