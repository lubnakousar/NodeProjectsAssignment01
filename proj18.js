/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
let countList = ['Italy', 'United States', 'Iran', 'Denmark', 'England'];
//• Print your array in its original order.
console.log('\nOriginal List\t\t', countList);
//• Print your array in alphabetical order without modifying the actual list.
console.log('\nPrint your array in alphabetical order without modifying the actual list.\n');
var sortedList = [...countList];
console.log('Sorted List\t\t', sortedList.sort());
//• Show that your array is still in its original order by printing it.
console.log('Original List\t\t', countList);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\nPrint your array in reverse alphabetical order without changing the order of the original list.\n');
console.log('Reverse List\t\t', sortedList.reverse());
//• Show that your array is still in its original order by printing it again.
console.log('Original List\t\t', countList);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log('\nReverse the order of your list. Print the array to show that its order has changed\n');
countList.reverse();
console.log('Original List\t\t', countList);
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('\nReverse the order of your list again. Print the list to show it’s back to its original order.\n');
countList.reverse();
console.log('Original List\t\t', countList);
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('\nSort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.\n');
countList.sort();
console.log('Original List\t\t', countList);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('\nSSort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.\n');
countList.reverse();
console.log('Original List\t\t', countList);
export {};
