let a="sam", b="max", c="vas", d="jim"; 
let a1 = 'sam is loser' + 'sam is winner';
a2 = 'SALUTE TO FIRST FILED MARSHAL OF INDIA SAM MANEKSHAW';
a3 = "   indian army   "
a4 = "123"
a5 = 123

//charAt = its helps to show index of the string value
check = a.charAt(2).concat(" ",b.charAt(2)," ", c.charAt(2)," ", d.charAt(2));
console.log(check);
console.log(a.charAt(2), b.charAt(2), c.charAt(2), d.charAt(2));

//concat = Join two or more string
result = a.concat(" ",b," ",c," ",d);
console.log(result); 
console.log(a.concat(" ",b," ",c," ",d));

//replace = confucing!!!

const India = "Modi is current Government of india";
result1 = India.replace("Modi is current Government", "Sunny is best");
console.log(India.replace("Modi is current Government", "Sunny is best"));
console.log(result1);
console.log(India);

// split = it is split sentences(2 Spacebars), word(1 spacebar), alphabets
// (zero space bar)(used '' for space or  parts) in the numbers of parts 


console.log(a1.length)
result2 = a1.split('is',);
console.log(result2);
console.log(a1.split(' ',))

//substr for return value from selected number to manual length of string
console.log(a1.substr(7,26));

//substring, slice for return value from selected number to manual ends of number

console.log(a1.slice(7,12));
console.log(a1.substring(20,26));

//toLowerCase() it's convert upper word to lower word
console.log(a2.toLowerCase());

//toUpperCase() it's convert lower word to upper word
console.log(a1.toUpperCase());

//trim() its remove white space from the string.
console.log(a3); // without trim()
console.log(a3.trim()); //with trim()

//includes idk!!!!
console.log(a4.includes()); //false

//search() it shows string value from a starting value number. 
//if i want to search winner at a1 then its start from 20.

console.log(a1.search('winner'));



// convert number and boolean into string value.

let akka1, akka2 ;
akka1 = 777;
akka2 = true;

show1 = String(akka1);
show2 = String(akka2);

console.log(typeof show1); //we can see type of value in here
console.log(typeof show2); //we can see type of the value here.

console.log(show1);
console.log(show2);

// how to add string of value
let sixat1 = "hello";
sixat1 += " world";
console.log(sixat1);


