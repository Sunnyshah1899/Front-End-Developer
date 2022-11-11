// an array is an object (data type of js) that store multiple value at once, example is,

//1.there are two ways to using array data type
//1. literal (easy) : 
const arraya = [1,2,3,4];
//2. Using "new" keyword
const arrayb = new Array('a for "a"','b','c');
console.log(arraya.join);
console.log(arrayb);

//2.Example of array
//empty
const mylist1 = [" "]; console.log(mylist1);
//numbers
const mynumber = [1,2,3,4]; console.log(mynumber);
//string
const mystring = ["kaise ho bhaio?", "how are u brothers?"]; console.log(mystring);
//mixed
const mixed = [1,2,3,"no", "sukhi", 'dnukhi' , true]; console.log(mixed);

//you can save multiple datatypes in same variable. but {} its require after the end.
const newData = [ {'task1':'keep healthy'}, [1,2,3], function hello() {} ]; 
console.log(newData);

//access, add, change, remove array


//Access :
let MeraArray1 = ['h','e','l','l','o'];

console.log(MeraArray1.length);
console.log(MeraArray1[0]);
console.log(MeraArray1[1]);
console.log(MeraArray1[2]);
console.log(MeraArray1[3]);
console.log(MeraArray1[4]);

//Add    push() : from the beginning | unshift() : from the start
Merastring = ['morning', 'night'];
//push() : adds an element from last
Merastring.push('midnight');
console.log(Merastring);
//unshift() : adds an element from beginning
Merastring.unshift("early morning")
console.log(Merastring);

//Edit
MaruString = ['Lazy', 'Loser']; //['Lazy', 'Loser']
console.log(MaruString[0]);
console.log(MaruString);
MaruString[0] = "Hardworking";
MaruString[1] = "Winner";
MaruString.unshift("sunny is ");
MaruString[3] = "Professional";
MaruString[30] = "Experienced";
console.log(MaruString);

//Remove  pop() : remove last element of index | shift() : remove first elements of the index
MaruString.pop(); // it would removing 'Experienced'
console.log(MaruString); 
MaruString.shift(); // it would removing "sunny is"
console.log(MaruString);

//Array Length : 
console.log(MaruString.length);

//Array Operator:
//its an same as Other operator
 let arb = ['how','are','you'];
 let arb1 = ['i','am','fine'];
 let arb2 = ['tell','about','yours'];
 let arb3 = ['i','feel','energetic'];

 let name = ['a','b','c','d','e','f','g','h','i','j'];
 age = [22, 10, 84, 20, 36, 23, 21, 32, 26, 09];
 specification = ['ordinary', 'leader', 'businessman', 'leader', 'actress'];
 popularity = [0, 10, 7, 13, 40, 2, 1, 8, 2, 1]
 sort = ['a','s','d','f','g','h','j','k','l'];





//concat()
console.log(arb.concat(arb1, arb2, arb3));
//indexof()
console.log(arb.indexOf("are")); //1
//filter
popularityfilter = popularity.filter(popular); function popular(famous) {return famous >= 5 };
console.log(popularityfilter);
popularityfilter1 = popularity.filter(notfamous); function notfamous(lessfamous) {return lessfamous < 8};
console.log(popularityfilter1);
//sort
console.log(sort.sort()); //'a', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 's'
//find : thats a help to find first value over or less your selected value in the array which do you want to see in the result
console.log(age.find(goto)); function goto(togo) {return togo  > 22}; //84
//findIndex: that a help us find index number of the value in the array which is based on your selective value.
console.log(age.findIndex(goto)); function goto(togo) {return togo  > 22} //2 (84)
//includes
console.log(specification.includes('leader'));
//map 
console.log(age.map(funtion1)); function funtion1(gunakar) {return gunakar * 10}; // it multiply all value with 10 from age
console.log(age.map(Math.sqrt)); // it return all square root value from age


// you can see below there is value of a copied in the a1 and then we gotta changes in the a1 if 
//see return value of a by console.log then we able to see all changes in the 'a'
let a = ['h', 'e', 'l'];
let a1 = a;
console.log(a1.push('l')); //create l last
console.log(a1.pop('l')); // delete l last
console.log(a1.unshift('h')); // create h first 
console.log(a1.shift()); // delete h first 
console.log(a1.push('heaven'));
console.log(a); // ['h', 'e', 'l' ,heaven]

// you can create object to using array. 
let sam = ['Details'];

sam.name = 'Sunny'
sam.surname = 'Shah';
sam.fathername = 'Piyushbhai';
sam.age = '22years';

console.log(sam['surname']);
console.log(sam['fathername']);
console.log(sam['age']);
console.log(sam);

//multidimensional array : you can story multi array in single array
let arrdata = [['Name','sunny'],['Name2','SAM'],['Name3','RECKER']];
console.log(arrdata);
console.log(arrdata[0][1]); 
console.log(arrdata[1][1]);
console.log(arrdata[2][1]);

// push() multidimensional main array
let member = [['kriti','32'],['soham','25'],['emmy','35']];
newmember = member.push(['sunny', 22]);
console.log(member);

//add value in multidimensional element array
console.log( member[3][2] = "BEST");
console.log(member); 
member[0].push('actress');
member[1].push('doctor');
member[2].push('actress');
member[3].pop();
member[3].push('ordinary');
console.log(member);

//remove value in multidimensional element array
member[0].pop()
member[1].pop()
member[2].pop()
member[3].pop()
member.splice(2,1); // emmy has removed from members
member[2].splice(1,1);
console.log(member);
member[2][1] = '22'
console.log(member);


//remove value in multidimensional  array
member[4] = ['bhavin', '23'];
console.log(member);
member.pop();
member.pop();
console.log(member);

//iterating : 

//forEach() : _.foreach(1. (a_) => {2.  a_.foreach(3. (b_)=> {4. console.log(b_) 4.} 3.)             2.} 1.)
let TeamMembers = [['a','Score : 256'],['b','Score : 562'],['c', 'Score : 563'],['d','Score : 562'],['e','Score : 456'],['f','Score : 652'],['g','Score : 452'],['h','Score : 652'],['j','Score : 876'],['k','Score : 3453']];
TeamMembers.forEach((a)=>{a.forEach((sam)=>{console.log(sam)})});
for (let b1 of TeamMembers) {for (let b2 of b1) {console.log(b2)}};






















