/*Name Cases: Store a person’s name in a variable, and then print that person’s name 
 in lowercase, uppercase, and titlecase*/
//pName is already declared in proj01
let pName2 = 'Lubna Kousar'
console.log('The person\'s name in lowercase    : ', pName2.toLowerCase() )
console.log('The person\'s name in upercase     : ', pName2.toUpperCase() )

const toTitleCase = pName2.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log('The person\'s name in lowercase    : ', toTitleCase )
