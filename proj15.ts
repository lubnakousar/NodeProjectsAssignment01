/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
var friendName:String[] = ['Komal','Tehseen','Aleena','Kubra']
var messageP = 'Hi'
var messagePst = 'you are cordially invited to attend the wedding ceremoney of my beloved son'
console.log(messageP,friendName[0],messagePst)
console.log(messageP,friendName[1],messagePst)
console.log(messageP,friendName[2],messagePst)
console.log(messageP,friendName[3],messagePst)
console.log('Kubra can\'t make it')
friendName[3] = 'Ayesha'
console.log(messageP,friendName[0],messagePst)
console.log(messageP,friendName[1],messagePst)
console.log(messageP,friendName[2],messagePst)
console.log(messageP,friendName[3],messagePst)
