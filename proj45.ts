/**Cars: Write a function that stores information about a car in a Object. 
 * The function should always receive a manufacturer and a model name. 
 * It should then accept an arbitrary number of keyword arguments. 
 * Call the function with the required information and two other name-value pairs, 
 * such as a color or an optional feature. Print the Object that’s returned 
 * to make sure all the information was stored correctly. */

function car_info(manufacturer: String, model_name: String, ...car_properties: any[]): any{
    const car_obj: any = {
        manufacturer,
        model_name,
    };
    for(const [key,value] of car_properties){
        car_obj[key] = value;
    }
    return car_obj 
}
const car: any = car_info("Daihatsu","Mira",["color","white"],["Transmission","Auto"])
console.log(car)
