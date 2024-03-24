//in tscconfig make changes on  line 14 target = 'es2022'
//line 28 and 30 change to NodeNext
//in packagejson Line 6 "type": "module",
import inquirer from "inquirer";
let name = await inquirer.prompt([
    {
        name: "name",
        message: "Enter your name: ",
        type: "input"
    }
]);
console.log("Your name is " + name);
