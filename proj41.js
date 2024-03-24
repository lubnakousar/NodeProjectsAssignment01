/**Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 * which prints the name of each magician in the array. */
let magicians_name = ["Harry Houdini", "Dynamo", "Teller", "Lance Burton"];
function show_magicians(magician_array) {
    for (let i = 0; i < magician_array.length; i++) { // to print the entire array without custom message we can use for(let item of magician_array)
        console.log("Name of Magician No." + (i + 1), "is", magician_array[i]);
    }
}
//main program
show_magicians(magicians_name);
export {};
