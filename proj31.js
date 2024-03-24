/**No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */
var personAge = 0;
if (personAge <= 2)
    console.log("The person is a baby");
personAge = 3;
if ((personAge) >= 2 && (personAge < 4))
    console.log("The person is a toddle");
personAge = 10;
if ((personAge) >= 4 && (personAge < 13))
    console.log("The person is a kid");
personAge = 15;
if ((personAge) >= 13 && (personAge < 20))
    console.log("The person is a teenager");
personAge = 40;
if ((personAge) >= 20 && (personAge < 65))
    console.log("The person is an adult");
personAge = 70;
if (personAge >= 65)
    console.log("The person is an elder");
export {};
