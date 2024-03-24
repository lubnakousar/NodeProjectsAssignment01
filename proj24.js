/**More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 * If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
 * • Tests for equality and inequality with strings
 * • Tests using the lower case function
 * • Numerical tests involving equality and inequality, greater than and less than,
 *   greater than or equal to, and less than or equal to
 * • Tests using "and" and "or" operators
 * • Test whether an item is in a array
 * • Test whether an item is not in a array */
var car = "Lamborghini";
var car2 = "Bugatti";
var car3 = "Lamborghini";
var makeLambor = 2023;
var makeBugatti = 2024;
var carcolor = "Red";
var car2color = "Black";
var makeList = [2020, 2021, 2022, 2023];
//• Tests for equality and inequality with strings
if (car == car3) {
    console.log("Both Strings are equal.");
}
if (car != car2) {
    console.log("Both strings are not equal");
}
//• Tests using the lower case function
if (car.toLowerCase() == car3.toLowerCase()) {
    console.log("Both Strings are equal.");
}
if (car.toUpperCase() != car3.toLowerCase()) {
    console.log("Both Strings are not equal.");
}
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
if (makeLambor + 1 == makeBugatti) {
    console.log("Both numbers are equal");
}
if (makeLambor != makeBugatti) {
    console.log("Both numbers are not equal");
}
//• Tests using "and" and "or" operators
if ((makeLambor <= makeBugatti) && (car2color == "Black")) {
    console.log("Black Bugatti is newer than Lamborghini");
}
if ((makeBugatti >= makeLambor) || (carcolor = "Red")) {
    console.log("Red Lamborghini is older than Black Bugatti");
}
//• Test whether an item is in a array
if (makeList.includes(makeLambor)) {
    console.log("Lamborghini's Model is in the array.");
}
//• Test whether an item is not in a array
if (makeList.includes(makeBugatti) == false) {
    console.log("Lamborghini's Model is not in the array.");
}
export {};
