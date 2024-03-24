/**T-Shirt: Write a function called make_shirt() that accepts a size and the 
 * text of a message that should be printed on the shirt. The function should 
 * print a sentence summarizing the size of the shirt and the message 
 * printed on it. Call the function. 
 * */
import chalk from "chalk"
function make_shirt1(size: number, msg: String): void {
    console.log(chalk.yellow("\"",msg,"\""),"Text will be printed on ths Shirt with size",size)
}
console.log(chalk.green("This program contains a function with numeric and string arguments. "))
console.log("Give size of shirt and text to print on it.")
make_shirt1(12,"Spiderman")
make_shirt1(5,"Cute baby")
console.log()
function make_shirt(size: String, msg: String): void {
    console.log(chalk.blue("\"",msg,"\""),"Text will be printed on ths Shirt with size",chalk.blue(size))
}
console.log(chalk.green("This program contains a function with two string arguments."))
console.log("Give size of shirt and text to print on it.")
make_shirt("Small","The Gaming God")
make_shirt("Large","The Gammer")