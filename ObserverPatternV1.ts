interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
}

interface Observer {
    update(temperature: number): void;
    display(): void;
}

interface DisplayElement {
    display(): void;
}

class WeatherStation implements Subject {
    private temperature: number;
    private observers: Observer[] = [];

    setTemperature(temp: number) {
        this.temperature = temp;
        this.notifyObservers();
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

class TemperatureDisplay implements Observer, DisplayElement {
    private subject: Subject;
    private temperature: number;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number): void {
        this.temperature = temperature;
    }

    display(): void {
        console.log('Temperature: ' + this.temperature);
    }
}

const weatherStation = new WeatherStation();
const temperatureDisplay = new TemperatureDisplay(weatherStation);

// Simulate temperature updates
weatherStation.setTemperature(25);
temperatureDisplay.display();

weatherStation.setTemperature(30);
temperatureDisplay.display();

weatherStation.setTemperature(28);
temperatureDisplay.display();

