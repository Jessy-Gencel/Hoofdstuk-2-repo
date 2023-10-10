import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let cache = 0
let getal1 = parseFloat(await userInput.question("Kies uw eerste getal "))
let getal2 = parseFloat(await userInput.question("Kies uw tweede getal "))
let getal3 = parseFloat(await userInput.question("Kies uw derde getal "))
let getal4 = parseFloat(await userInput.question("Kies uw vierde getal "))
let getal5 = parseFloat(await userInput.question("Kies uw vijfde getal "))
let som = 0

if (getal2 > getal1){ // maakt nummer 1 het grootste nummer
    cache = getal1
    getal1 = getal2
    getal2 = cache
}

if (getal3 > getal1){ // maakt nummer 1 het grootste nummer
    cache = getal1
    getal1 = getal3
    getal3 = cache
}
if (getal2 < getal3){ // maakt nummer 3 het kleinste nummer
    cache = getal3
    getal3 = getal2
    getal2 = cache
}

if (getal4 > getal1){ // maakt nummer 1 het grootste nummer
    cache = getal1
    getal1 = getal4
    getal4 = cache
}
if (getal3 < getal4){ // maakt nummer 4 het kleinste nummer
    cache = getal4
    getal4 = getal3
    getal3 = cache
}

if (getal5 > getal1){ // maakt nummer 1 het grootste nummer
    cache = getal1
    getal1 = getal5
    getal5 = cache
}
if(getal4 < getal5){ // maakt nummer 5 het kleinste nummer
    cache = getal5
    getal5 = getal4
    getal4 = cache
}

som = parseFloat(getal1) + parseFloat(getal2) + parseFloat(getal3) + parseFloat(getal4) + parseFloat(getal5)

console.log("Het grootste getal was " + getal1)
console.log("Het kleinste getal was " + getal5)
console.log("het gemiddelde was " + som/5)
process.exit()
