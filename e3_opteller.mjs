// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



let num1=parseFloat(await userInput.question('Geef een getal in:'));

let num2=parseFloat(await userInput.question('Geef een andere  getal in:'));

console.log('je resultaat is '+ (num1 + num2))
process.exit();
