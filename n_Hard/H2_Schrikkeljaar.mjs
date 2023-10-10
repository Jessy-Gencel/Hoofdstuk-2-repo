import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaartal = parseInt(await userInput.question("Kies eender welk jaartal "))

if(jaartal % 400 == 0){
    console.log("Het is een schrikkeljaar, februari telt 29 dagen")
}else if(jaartal % 100 == 0){
    console.log("Dit is geen schrikkeljaar, februari telt 28 dagen")
}else if(jaartal % 4 == 0){
    console.log("Het is een schrikkeljaar, februari telt 29 dagen")
}else{
    console.log("Het is geen schrikkeljaar, februari telt 28 dagen")
}
process.exit()
