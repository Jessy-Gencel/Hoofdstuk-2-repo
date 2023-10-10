import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question("Kies een maand en ik vertel je hoeveel dagen deze telt. ")
switch(maand){
    case "september":
        console.log("De maand september telt 30 dagen")
        break
    case "oktober":
        console.log("De maand oktober telt 31 dagen")
        break
    case "november":
        console.log("De maand november telt 30 dagen")
        break
    case "december":
        console.log("De maand december telt 31 dagen")
        break
    case "januari":
        console.log("De maand januari telt 30 dagen")
        break
    case "februari":
        console.log("De maand februari telt 28 of 29 dagen")
        break
    case "maart":
        console.log("De maand maart telt 31 dagen")
        break
    case "april":
        console.log("De maand april telt 30 dagen")
        break
    case "mei":
        console.log("De maand mei bedraagt 31 dagen")
        break
    case "juni":
        console.log("De maand juni bedraagt 30 dagen")
        break
    case "juli":
        console.log("De maand juli bedraagt 31 dagen")
        break
    case "augustus":
        console.log("De maand augustus bedraagt 31 dagen")
        break
}
process.exit()