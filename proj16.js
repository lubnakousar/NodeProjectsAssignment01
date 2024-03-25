/* More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
  informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var friendName = ['Komal', 'Tehseen', 'Aleena', 'Kubra'];
var messageP = 'Hi';
var messagePst = 'you are cordially invited to attend the wedding ceremoney of my beloved son';
console.log(messageP, friendName[0], messagePst);
console.log(messageP, friendName[1], messagePst);
console.log(messageP, friendName[2], messagePst);
console.log(messageP, friendName[3], messagePst);
console.log('Kubra can\'t make it');
friendName[3] = 'Ayesha';
console.log(messageP, friendName[0], messagePst);
console.log(messageP, friendName[1], messagePst);
console.log(messageP, friendName[2], messagePst);
console.log(messageP, friendName[3], messagePst);
console.log('Hey everyone, I found a bigger dinning table, I can invite more guests');
friendName.unshift('Asma');
friendName.push('Aizaz');
friendName.splice((friendName.length / 2), 0, 'Raed');
console.log(messageP, friendName[0], messagePst);
console.log(messageP, friendName[1], messagePst);
console.log(messageP, friendName[2], messagePst);
console.log(messageP, friendName[3], messagePst);
console.log(messageP, friendName[4], messagePst);
console.log(messageP, friendName[5], messagePst);
console.log(messageP, friendName[6], messagePst);
export {};
