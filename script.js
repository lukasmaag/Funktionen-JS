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

// Objects + array ausgabe + PS Vergleich
const carArray = [
  {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    ps: 125,
  },
  {
    brand: "Toyota",
    model: "Corolla",
    year: 1990,
    ps: 90,
  },
  {
    brand: "Porsche",
    model: "911",
    year: 2022,
    ps: 450,
  },
  {
    brand: "VW",
    model: "Polo",
    year: 2019,
    ps: 80,
  },
];

function printAllCarsInfo(cars) {
  cars.forEach((car, index) => {
    console.log(
      `Auto ${index + 1}: Ein ${car.brand} ${car.model} aus dem Jahr ${
        car.year
      }.`
    );
  });
}

printAllCarsInfo(carArray);

function findPowerExtremes(cars) {
  const strongest = cars.reduce((max, car) => (car.ps > max.ps ? car : max));
  const weakest = cars.reduce((min, car) => (car.ps < min.ps ? car : min));

  console.log(
    `Das Auto mit den meisten PS ist: ${strongest.brand} ${strongest.model}, ${strongest.ps} PS`
  );
  console.log(
    `Das Auto mit den wenigsten PS ist: ${weakest.brand} ${weakest.model}, ${weakest.ps} PS`
  );
}

findPowerExtremes(carArray);

function displayCarsInHTML(cars) {
  const container = document.getElementById("car-container");

  cars.forEach((car) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${car.brand} ${car.model} (${car.year}) - ${car.ps} PS`;
    container.appendChild(paragraph);
  });
}

displayCarsInHTML(carArray);


function displayCarsInHTML(cars) {
  const container = document.getElementById("car-container");
  container.innerHTML = "";

  cars.forEach((car) => {
    const carDiv = document.createElement("div");
    carDiv.className = "car-card";

    const title = document.createElement("h3");
    title.textContent = `${car.brand} ${car.model}`;

    const details = document.createElement("p");
    details.textContent = `Baujahr: ${car.year} | Leistung: ${car.ps} PS`;

    const editButton = document.createElement("button");
    editButton.textContent = "Bearbeiten";
    editButton.onclick = () => editCar(car);

    carDiv.appendChild(title);
    carDiv.appendChild(details);
    carDiv.appendChild(editButton);

    container.appendChild(carDiv);
  });
}

function editCar(car) {
  const ps = prompt("Neue PS-Zahl eingeben:", car.ps);
  if (ps !== null) {
    car.ps = parseInt(ps);
    displayCarsInHTML(carArray);
    findPowerExtremes(carArray);
  }
}

function fetchAndAddCars() {
  fetch("https://munich-software-studios.de/car.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Netzwerk-Antwort war nicht ok");
      }
      return response.json();
    })
    .then((newCars) => {
      carArray.push(...newCars);
      displayCarsInHTML(carArray);
      findPowerExtremes(carArray);
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
    });
  console.log(newCars);
}

function addFetchButton() {
  const container = document.getElementById("car-container");
  const fetchButton = document.createElement("button");
  fetchButton.textContent = "Weitere Autos laden";
  fetchButton.style.marginBottom = "20px";
  fetchButton.onclick = fetchAndAddCars;
  container.insertBefore(fetchButton, container.firstChild);
}

addFetchButton();
