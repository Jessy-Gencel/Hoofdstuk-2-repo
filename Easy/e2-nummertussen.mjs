import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
 
let minimum = 2
let maximum = 20
let getal = parseFloat(await userInput.question("Kies je getal alstublieft "))

if(getal >= minimum && getal <= maximum){
    console.log("Je getal " + getal + " ligt tussen " + minimum + " en " + maximum + " Yay!")
}else{
    console.log("Je getal ligt niet tussen " + minimum + " en " + maximum + " :( !")
}
process.exit()