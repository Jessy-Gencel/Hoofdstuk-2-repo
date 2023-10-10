import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log("Welkom bij het quizspel, veel succes bij het beantwoorden van de volgende 5 vragen.")
console.log("Gelieve alle antwoorden met kleine letters te noteren")
console.log("")

let score = 0
let antwoord = await userInput.question(("Waar staat de afkorting PVC voor? ")) // Vraag 1
let correctAntwoord1 = "polyvinylchloride"
let correctAntwoord2 = "noorse mythologie"
let correctAntwoord3 = "not in education, employement or training"
let correctAntwoord4 = "120"
let correctAntwoord5 = "v/2l"

console.log("Jouw antwoord was " + antwoord)
if (antwoord == correctAntwoord1){
    console.log("Jouw antwoord was juist!")
    score += 1
}else{
    console.log("Dat antwoord is jammer genoeg fout, het correcte antwoord is " + correctAntwoord1)
}
console.log("")

antwoord = await userInput.question(("Uit welke mythologie komt de raaf Munin? ")) // Vraag 2
console.log("Jouw antwoord was " + antwoord)
if (antwoord == correctAntwoord2){
    console.log("Jouw antwoord was juist!")
    score += 1
}else{
    console.log("Jouw antwoord is jammer genoeg fout, het correcte antwoord is " + correctAntwoord2)
}
console.log("")

antwoord = await userInput.question(("Waar staat de afkorting NEET voor? ")) //Vraag 3
console.log("Jouw antwoord was " + antwoord)
if (antwoord == correctAntwoord3){
    console.log("Jouw antwoord was juist!")
    score += 1
}else {
    console.log("Jouw antwoord is jammer genoeg fout, het correcte antwoord is " + correctAntwoord3)
}
console.log("")

console.log("Een bestuurder rijdt op een horizontale rijweg volgens een eenparige rechtlijnige beweging")
console.log("De wagen schuift over de weg en laat een remspoor achter met een lengte van 68m")
console.log("als je weet dat de dynamische wrijvingscontante op deze weg 0.80 bedraagt")
antwoord = await userInput.question(("Welke snelheid heeft de wagen op het ogenblik dat de chauffeur begint met remmen?(antwoord enkel in cijfers (km/h)) ")) //Vraag 4
if (antwoord == correctAntwoord4){
    console.log("Jouw antwoord was juist!")
    score +=1
}else{
    console.log("Je antwoord was jammer genoeg fout, het correcte antwoord is " + correctAntwoord4)
}
console.log("")

antwoord = await userInput.question("Met welke formule bereken je de frequentie van een snaar met 2 vaste uiteinden? ") // Vraag 5
if (antwoord == correctAntwoord5){
    console.log("jouw antwoord was juist!")
    score += 1   
}else{
    console.log("Je antwoord was jammer genoeg fout, het correcte antwoord is " + correctAntwoord5)
}
console.log("")

console.log("Je eindscore is " + score + " op 5")
console.log("danku voor het spelen en onthoud een 0 op 5 zonder vals te spelen is veel meer waard dan een fraudulente 5 op 5")
process.exit()

