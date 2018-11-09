var Car = (function () {
    function Car(carName, year, mileage, rpm) {
        this.carName = carName;
        this.year = year;
        this.mileage = mileage;
        this.rpm = rpm;
    }
    Car.prototype.getCarName = function () {
        return this.carName;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.getmileage = function () {
        return this.mileage;
    };
    Car.prototype.getrpm = function () {
        return this.rpm;
    };
    Car.prototype.description = function () {
        var desc = "carname: " + this.getCarName() + "\n                    Year of Mfg: " + this.year + "\n                    Mileage: " + this.mileage + "\n                    RPM : " + this.rpm;
        console.log(desc);
        document.getElementById('display').innerHTML = desc;
    };
    return Car;
}());
var car = new Car('Benz', 2018, '10kmpl', ' 8000rpm ');
car.description();
