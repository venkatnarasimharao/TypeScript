// Create a simple class and usage
// add a constructor to a class
// add methods to a class
// add getter and setter methods of a class
// Implement an interface and methods and variables of interface
interface Vehicle{
    description():void;
}
class Car implements Vehicle{

    private carName:string;
    private  year:number;
    private mileage:string;
    private rpm:string;

    constructor(carName , year , mileage , rpm){
        this.carName = carName;
        this.year = year;
        this.mileage= mileage;
        this.rpm= rpm;
    }

    getCarName():string{
        return this.carName;
    }
    getYear():number{
        return this.year;
    }
    getmileage():string{
        return this.mileage;
    }
    getrpm():string{
        return this.rpm;
    }

    public description():void{
        let desc = `carname: ${this.getCarName()}
                    Year of Mfg: ${this.year}
                    Mileage: ${this.mileage}
                    RPM : ${this.rpm}`;
        console.log(desc);
        document.getElementById('display').innerHTML=desc;
    }
}

let car = new Car('Benz' , 2018 , '10kmpl', ' 8000rpm ');
car.description();