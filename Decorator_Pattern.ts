abstract class Beverage {
    constructor(public description: string) {
        this.description = description;
    }

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

class Espresso extends Beverage {
    constructor() {
        super("Espresso");
    }

    public cost(): number {
        return 1.99;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super("House Blend Coffee");
    }

    public cost(): number {
        return 0.89;
    }
}

class DarkRoast extends Beverage {
    constructor() {
        super("Dark Roast Coffee");
    }

    public cost(): number {
        return 0.99;
    }
}

class Decaf extends Beverage {
    constructor() {
        super("Decaf Coffee");
    }

    public cost(): number {
        return 1.05;
    }
}


abstract class CondimentDecorator extends Beverage {
    public abstract getDescription(): string;
}

class Mocha extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super("");
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    public cost(): number {
        return 0.20 + this.beverage.cost();
    }
}

class Whip extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super("");
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    public cost(): number {
        return 0.10 + this.beverage.cost();
    }
}

class Soy extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super("");
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    public cost(): number {
        return 0.15 + this.beverage.cost();
    }
}

class SteamedMilk extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super("");
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Steamed Milk";
    }

    public cost(): number {
        return 0.10 + this.beverage.cost();
    }
}

let beverage: Beverage = new DarkRoast();
beverage = new Mocha(beverage);
beverage = new Mocha(beverage);
beverage = new Whip(beverage);
console.log(beverage.getDescription() + " $" + beverage.cost()); 