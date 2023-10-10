import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("Kies een van de volgende artiesten:")
console.log("1. Motionless in white")
console.log("2. Skillet")
console.log("3. Linkin park")
console.log("4. Baby metal")
console.log("")

let keuzeArtiest = await userInput.question("Geef je keuze in via het bijbehorende nummer. ")

if (keuzeArtiest == 1 ){
    console.log("Je koos voor Motionless in white")
    console.log("Ze zijn de band achter Sign of life")
}else if (keuzeArtiest == 2){
    console.log("Je koos voor Skillet")
    console.log("Ze zijn de band achter Feel invincible")
}else if (keuzeArtiest == 3){
    console.log("Je koos voor Linkin park")
    console.log("Ze zijn de band achter Given up, R.I.P chester")
}else if (keuzeArtiest == 4){
    console.log("Je koos voor Baby metal")
    console.log("Ze zijn de de band achter メギツネ (Megitsune)")
}else{
    console.log("Ik herken die optie jammer genoeg niet")
}
process.exit()