  // if (age < 13 ) {
  //   return "Elementary School"
  // }else if (age >= 13 && age <= 18){
  //   return "Secondary School"
  // }


  const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

stations2 = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
];

const goodStaions = []

const chooseStations = function(stations) {
    
  for (const station of stations) {
    if ((station[1] > 20) && ((station[2] === "school") || (station[2] === "community centre"))) {
       goodStaions.push(station[0])
    }
     
  }

  return goodStaions;
}
console.log(chooseStations(stations2));


// finding position using cordinates
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function (moves) {

  let x = 0;
  let y = 0;

  for (const move of moves) {
    if (move === "north") {
      y = y + 1
    }
    if (move === "south") {
      y = y - 1
    }
    if (move === "west") {
      x = x - 1
    }
    if (move === "east") {
      x = x + 1
    }
  }
  const position = [x, y]
  return position
}

console.log(finalPosition(moves))

const ageCalculator = function(name, yearOfBirth, currentYear) {
  
  const age = currentYear - yearOfBirth
  return `name is ${age} years old`

}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));




const howManyHundreds = function (num) {
  return Math.floor(num/100);
}
console.log(howManyHundreds(895));


// function chooseStations(stations) {
//   // Your code in here ...
//   const goodStations = []
  
//   for (const station in stations) {
//     if (station[1] > 20) {
//       if (station[2] === "school" || station[2] === "community center") {
//         goodStations.push(station[0])
//       }
      
//     }
    
//   }
//   return goodStations
// }

// console.log(chooseStations(stations))