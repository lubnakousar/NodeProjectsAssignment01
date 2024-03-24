/**Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
 * The function should have one parameter that collects as many items as the function call 
 * provides, and it should print a summary of the sandwich that is being ordered. 
 * Call the function three times, using a different number of arguments each time.
 */
import chalk from 'chalk'
function make_sandwich(...itemList: String[]): void{
    console.log(chalk.magentaBright("\nSummary of the Sanwich being ordered"))
    itemList.forEach((item,index) => {
        console.log(index+1,item)
    })
}
make_sandwich("Fajita")
make_sandwich("Chicken","Cheese")
make_sandwich("Chicken","Moyo","Tomato Sauce","Lettuce")