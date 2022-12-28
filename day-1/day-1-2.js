// By the time you calculate the answer to the Elves' question, they've already realized that the Elf carrying the most Calories of food might eventually run out of snacks.

// To avoid this unacceptable situation, the Elves would instead like to know the total Calories carried by the top three Elves carrying the most Calories. That way, even if one of those Elves runs out of snacks, they still have two backups.

// In the example above, the top three Elves are the fourth Elf (with 24000 Calories), then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories). The sum of the Calories carried by these three elves is 45000.

// Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?


const fs = require('fs')
const buffer = fs.readFileSync("./input.txt")

let currentList = 0, highestList = 0
let currentElf = 0, highestElf = 0
let elves = []

buffer.toString().split('\n').forEach((number) => {
  elves.sort()
  if (number === '') {
    if (currentList > highestList) {
      highestList = currentList
      highestElf = currentElf
    }
    elves.push(currentList.toString())
    currentList = 0
    currentElf += 1
  } else {
    currentList += parseInt(number)
  }
})

let topThree = 0
elves.reverse()

for (let i = 0; i <= 2; i++) {
  topThree += parseInt(elves[i])
}

console.log(topThree)