/**Large Shirts: Modify the make_shirt() function so that shirts are large by default
 * with a message that reads I love TypeScript. Make a large shirt and a medium shirt
 * with the default message, and a shirt of any size with a different message.
 */
import chalk from 'chalk';
function make_shirt(size = "Large", msg = "I Love Typescript") {
    console.log(chalk.blue(size), "Shirt will be printed with message", chalk.blue("\"", msg, "\""));
}
console.log(chalk.green("This program contains a function with two string parameters."));
console.log("Give size of shirt and text to print on it.");
make_shirt(undefined, undefined);
make_shirt("Medium", undefined);
make_shirt("small", "I Love Java");
