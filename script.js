function add(a, b) {
  const result = a + b;
  return result;
}
const number1 = add(58, 22);
const number2 = add(94, 21);

console.log(number1);
console.log(number2);

function subtract(a, b) {
  const result = a - b;
  return result;
}
const number3 = subtract(58, 22);
const number4 = subtract(94, 21);

console.log(number3);
console.log(number4);

function multiply(a, b) {
  const result = a * b;
  return result;
}
const number5 = multiply(58, 22);
const number6 = multiply(94, 21);

console.log(number5);
console.log(number6);

function divide(a, b) {
  const result = a / b;
  return result;
}
const number7 = divide(58, 22);
const number8 = divide(94, 21);

console.log(number7);
console.log(number8);

let vorname = "Hans";
let nachname = "Wurst";
let vollerName = vorname + " " + nachname;
console.log(vollerName);

// Arrays

const cars = ["Porsche", "Mercedes", "Toyota", "Nissan", "BMW"];
cars.unshift("Audi");
cars.push("Ford");

cars.sort();

console.log(cars.join(" | "));

cars.forEach((car) => {
  console.log(car);
});

// Modify Array
function modifyArray(firstElement, lastElement) {
  cars.unshift(firstElement);
  cars.push(lastElement);
  return cars;
}
console.log("Original Array:", cars);
modifyArray("Tesla", "Ferrari");
console.log("Modified Array:", cars);

// Find Car
function findCar(carName) {
  if (cars.includes(carName)) {
    console.log(`Gefunden: ${carName}`);
  } else {
    console.log("Nicht gefunden");
  }
}
findCar("Toyota");
findCar("Fiat");
findCar("BMW");

// Car Stats
function getCarStats() {
  let totalLength = 0;
  let carsOverFive = 0;
  let longestCar = cars[0];

  cars.forEach((car) => {
    totalLength += car.length;

    if (car.length > 5) {
      carsOverFive++;
    }

    if (car.length > longestCar.length) {
      longestCar = car;
    }
  });

  const averageLength = totalLength / cars.length;

  console.log(
    `Durchschnittliche Länge: ${averageLength.toFixed(2)} Buchstaben`
  );
  console.log(`Autos mit mehr als 5 Buchstaben: ${carsOverFive}`);
  console.log(`Auto mit längstem Namen: ${longestCar}`);
}
getCarStats();

// Convert to Upper Case
function convertToUpperCase(carName) {
  const upperCaseName = carName.toUpperCase();
  console.log(upperCaseName);
  return upperCaseName;
}

const result = convertToUpperCase("Porsche");

// Objects
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

function printCarInfo(car) {
  console.log(
    `Das Auto ist ein ${car.brand} ${car.model} aus dem Jahr ${car.year}.`
  );
}

printCarInfo(car);
