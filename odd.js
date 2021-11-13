const isOdd = function(num){
  return num % 3 == 0;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  // Your code in here ...
  const goodStations = []
  
  for (const station in stations) {
    if (station[1] > 20) {
      if ((station[2] === "school") || (station[2] === "community center")) {
        goodStations.push(station[0])
      }
      
    }
    
  }
  return goodStations
}

console.log(chooseStations(stations))


const ageCalculator = function(name, yearOfBirth, currentYear) {
  
  const age = currentYear - yearOfBirth
  
  return "\'name is " + age + " years old\.\'"
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));