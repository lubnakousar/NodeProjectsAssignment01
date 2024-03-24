/**Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great()
 * with a copy of the array of magicians’ names. Because the original array will be unchanged, 
 * return the new array and store it in a separate array. Call show_magicians() with each array 
 * to show that you have one array of the original names and one array with the Great added to 
 * each magician’s name.
 */
import chalk from 'chalk'
let magicians_name: String[] = ["Harry Houdini","Dynamo", "Teller","Lance Burton"]

function show_magicians(magician_array: String[]): void{    
    for(let item of magician_array){
        console.log(item) 
    } 
}
//adding second function
function make_great(make_grt: String[]) : String[]{
    let greatarray: String[] = make_grt.map(m => `The Great ${m}`)
    return(greatarray)
}
//main program
console.log(chalk.blueBright("Original Array"))
show_magicians(magicians_name)
let changed_array: String[] = make_great(magicians_name)
console.log(chalk.redBright("Modified Array"))
show_magicians(changed_array)
console.log(chalk.greenBright("Again printing original array"))
show_magicians(magicians_name)