/*Shrinking Guest List: You just found out that your new dinner table 
won’t arrive in time for the dinner, and you have space for only two guests.
 */
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
  console.log('Hey everyone, I found a bigger dinning table, I can invite more guests')
  friendName.unshift('Asma')
  friendName.push('Aizaz')
  friendName.splice(3,0,'Raed')
  //'Nouman'.append(friendName)
  console.log(messageP,friendName[0],messagePst)
  console.log(messageP,friendName[1],messagePst)
  console.log(messageP,friendName[2],messagePst)
  console.log(messageP,friendName[3],messagePst)
  console.log(messageP,friendName[4],messagePst)
  console.log(messageP,friendName[5],messagePst)
  console.log(messageP,friendName[6],messagePst)
  /*• Start with your program from Exercise 16. Add a new line that prints a message 
  saying that you can invite only two people for dinner.*/
  console.log('My dinner table could not arrive on time, I can invite only two guest.')
  /*
• Remove guests from your list one at a time until only two names remain in your list. 
  Each time you pop a name from your list, print a message to that person letting them 
  know you’re sorry you can’t invite them to dinner.*/
  console.log('Sorry I could not invite you to dinner',friendName.pop())
  console.log('Sorry I could not invite you to dinner',friendName.pop())
  console.log('Sorry I could not invite you to dinner',friendName.pop())
  console.log('Sorry I could not invite you to dinner',friendName.pop())
  console.log('Sorry I could not invite you to dinner',friendName.pop())
  /*
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your 
  list to make sure you actually have an empty list at the end of your program. */
  console.log('Hi',friendName.pop(),'You are still invited')
  console.log('Hi',friendName.pop(),'You are still invited')
  console.log(friendName)