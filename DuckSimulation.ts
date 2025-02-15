class Duck{
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    protected display(){
        //To be overriden
    }

    performFly(){
        this.flyBehavior.fly();
    }

    performQuack(){
        this.quackBehavior.quack();
    }

    setFlyBehavior(fb: FlyBehavior){
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior){
        this.quackBehavior = qb;
    }

}

class MallardDuck extends Duck{
    constructor(){
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    display(){
        console.log("I am a Mallard Duck");
    }
}

class RedheadDuck extends Duck{
    constructor(){
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    display(){
        console.log("I am a Redhead Duck");
    }
}

class RubberDuck extends Duck{
    constructor(){
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Squeak();
    }

    display(){
        console.log("I am a Rubber Duck");
    }
}

class DecoyDuck extends Duck{
    constructor(){
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new MuteQuack();
    }

    display(){
        console.log("I am a Decoy Duck");
    }
}


interface FlyBehavior{
    fly();
}

class FlyWithWings implements FlyBehavior{
    fly(){
        console.log("I am flying with wings");
    }
}

class FlyNoWay implements FlyBehavior{
    fly(){
        console.log("I can't fly");
    }
}

interface QuackBehavior{
    quack();
}

class Quack implements QuackBehavior{
    quack(){
        console.log("Quack");
    }
}

class Squeak implements QuackBehavior{
    quack(){
        console.log("Squeak");
    }
}

class MuteQuack implements QuackBehavior{
    quack(){
        console.log("<< Silence >>");
    }
}

// Test

let mallardDuck = new MallardDuck();
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();
