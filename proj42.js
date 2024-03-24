/**Great Magicians: Start with a copy of your program from Exercise 41.
 * Write a function called make_great() that modifies the array of magicians
 * by adding the phrase the Great to each magician’s name. Call show_magicians()
 * to see that the list has actually been modified.
 */
import chalk from 'chalk';
let magicians_name = ["Harry Houdini", "Dynamo", "Teller", "Lance Burton"];
function show_magicians(magician_array) {
    for (let i = 0; i < magician_array.length; i++) { // to print the entire array without custom message we can use for(let item of magician_array)
        console.log("Name of Magician No." + (i + 1), "is", magician_array[i]);
    }
}
//adding second function
function make_great(make_grt) {
    let newarray = make_grt.map(m => `The Great ${m}`);
    return (newarray);
}
//main program
//modifies the array of magicians by using make_great function
let makeMagGrt = make_great(magicians_name);
console.log(chalk.cyanBright("Original Array"));
show_magicians(magicians_name);
//show modified array
console.log(chalk.greenBright("Modified Array"));
show_magicians(makeMagGrt);
