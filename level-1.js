// question 1 
var pet = "bird";

// question 2 
var person = {
  name: "Elin",
  age: 24
}

// question 3 
var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4
var numbers = [4, 6, 9, 11, 13];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// question 5
for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// question 6
for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// question 7
var missingPersons = [
  {
    gender: "female",
    age: 23,
    found: false
  },
  {
    gender: "male",
    age: 38,
    found: true
  }
]
for (var i = 0; i < missingPersons.length; i++) {
  console.log(missingPersons[i].age);
  console.log(missingPersons[i].found);
}

// question 8
function whatIDontLike (thisKindOfFood) {
  console.log("I dont like" + thisKindOfFood);
}
whatIDontLike(" seafood ")

// question 9
function subtractingNumbers (number1, number2){
    var sum = number2 - number1;
    console.log(sum); 
}
subtractingNumbers(23, 16)

// question 10
var emptyArray = [];

function whatIDrinkEveryDay (IDrinkThis) {
  emptyArray.push(IDrinkThis);
}
whatIDrinkEveryDay("Pepsi Max");


