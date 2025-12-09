//gets command line arguments and slices off the first two elements
const args = process.argv.slice(2);

//converts the arguments from strings to numbers
const numbers = args.map(Number);

let sum = 0;

//loops through the numbers and adds them
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);