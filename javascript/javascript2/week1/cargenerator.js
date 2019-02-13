function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

const cars = generateCars(10);
console.log(cars);
function carSpeedIdentifier(min ,max) {
    const carBetween30and60 =[];
    for (i=0,)
    cars.filter(cars.speed);
    cars.push(car);
    return cars
    
    
}
const carBetween30and60 = carSpeedIdentifier(30,60);
console.log(carBetween30and60);

// generateCars(10);
// console.log(generateCars(10));
console.log(cars);
console.log(carSpeedIdentifier(30,60));
