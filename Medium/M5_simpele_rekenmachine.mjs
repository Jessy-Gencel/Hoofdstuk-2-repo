import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = await userInput.question("Kies uw eerste getal ")
let getal2 = await userInput.question("Kies uw tweede getal ")
console.log("Kies een van de volgende bewerkingen via het bijbehorende nummer:")
console.log("1. Optellen")
console.log("2. Aftrekken")
console.log("3. Vermenigvuldigen")
console.log("4. Delen")
let bewerking = await userInput.question("Uw gekozen nummer? ")

if (bewerking == "1"){
    console.log(parseFloat(getal1) + parseFloat(getal2))
}else if (bewerking == "2"){
    console.log(getal1 - getal2)
}else if (bewerking == "3"){
    console.log(getal1 * getal2)
}else if (bewerking == "4"){
    console.log(getal1 / getal2)
}else{
    console.log("Ik kan die bewerking niet uitvoeren")
}
process.exit()