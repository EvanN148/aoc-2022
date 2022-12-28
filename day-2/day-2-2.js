// --- Part Two ---
// The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

// The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

// In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
// In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
// In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.
// Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

// Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?

const fs = require('fs')
const buffer = fs.readFileSync("./input.txt")
const rounds = buffer.toString().split('\n')

let score = 0

rounds.forEach(round => {
  let op = round[0], u = round[2]
  switch(op) {
    case 'A':
      switch(u) {
        case 'X':         //lose
          score += 3 + 0  //choose scissors
          break;
        case 'Y':         //draw
          score += 1 + 3  //choose rock
          break;
        case 'Z':         //win
          score += 2 + 6  //choose paper
          break;
      }
      break;
    case 'B':
      switch(u) {
        case 'X':         //lose
          score += 1 + 0  //choose rock
          break;
        case 'Y':         //draw
          score += 2 + 3  //choose paper
          break;
        case 'Z':         //win
          score += 3 + 6  //choose scissors
          break;
      }
      break;
    case 'C':
      switch(u) {
        case 'X':         //lose
          score += 2 + 0  //choose paper
          break;
        case 'Y':         //draw
          score += 3 + 3  //choose scissors
          break;
        case 'Z':         //win
          score += 1 + 6  //choose rock
          break;
      }
      break;
  }
})

console.log(score)
