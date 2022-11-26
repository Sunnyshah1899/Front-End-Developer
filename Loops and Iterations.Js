// for..in loop ********************************************************
// it used to only on array and object data types
// it stands for number value if you not use object[key]
//you must use to varaible[key] to show key value of the iteration


// for..of loop : it can be use all data type ********************************
//You cannot use variable[] sign to show result of iteration of key value in the for..of loop
// for..of loop stands for strings value

//iteraable : in interable object (array,set,strings,etc).
//element : items in the iterable

//new rules of Set and Map : must use same scope within varible and loop iteration key

//Basic Loop
//Example 1: Display Text Five Times
const a = 5
for (i=0;i<=a;i++){console.log('hi')};
//Example 2: Display number 1 to 5
const a1 = a
for (i=0;i<=a1;i++){console.log(i)};
//Example 3: Display Number with Sum
const b = 10;
let b1 = 0; //never set empty value, if u do that then will got NaN in Result and use let if u want to change in there
for (i=0;i<=b;i++){b1+=i};
console.log("b1 value is : ",b1);
//Example 4 : reverse sum
const c = 10;
let c1 = 0;
for (i=c;i>=1;i--){c1+=i};
console.log(c1);

const infinit = 0
const thanos = 100
for (i=thanos;i<=1;i++){console.log(i)}//false
//Example 5 : for.in value (it based for array and object)
//type ${} is neccessary to show result of iterator

// for..in with object
const Indian_military_operation = {1947: "Operation Polo", 1971: "Operation Mukti vahini", 1989:"Opearion Cactus", 1999:"Opeartion Vijay", 2020:"Operation Pavanputra"};
for (Operation in Indian_military_operation){console.log(`year ${Operation} : ${Indian_military_operation[Operation]}`)};
//Another Example
let II = {Turkey:'Taimur', Uzbekistan:'Babur', Europe:'Alexander', Arabia: 'muhmmad bin qasim'}
for (cruel in II){console.log(cruel, II[cruel])};
//for..in with strings
const alpha = 'abc'
for(let bravo in alpha){console.log(alpha[bravo])}
// for..in with array
const Indianfreedomfighters = ['Subhaschandra Bose', 'Jawaharlal Nehru', 'Bhagat Singh', 'Pauna Bajrabhasi'];
for (leaders in Indianfreedomfighters){console.log(Indianfreedomfighters[leaders]);};



//for..of with object // object are not iterable in for..of 
console.log('for..of cannot use in object');
//for..of with strings

//for..of with
//array
const Programming= ['JavaScript','C++','Phython'];
for(Language of Programming){console.log(Language);};
//Strings
const Programming1= 'c+'
for(i of Programming1){console.log(i);};
//Set
const set = new Set(['Max','Sony','Zeetv']);
for(i of set){console.log(i)};
//map
const map = new Map([['Pakistan','Asia'],['India','Asia'],['France','Europe']])
for([i,o] of map){console.log(i,o)};// [] is nessessary if do you want sqareout into code runner

//USer defined iterators
 // creating iterable object
const iterableObj = {


    [Symbol.iterator]() 
    
{
        let step = 0;
        return { 
            
            next() {step++; if (step === 1) 
            {return { value: '1', done: false};}
                else if (step === 2) 
            {return { value: '2', done: false};}
                else if (step === 3) 
            {return { value: '3', done: false};}
               
            return { value: '', done: true };}
        }
}
}

// iterating using for...of
for (const i of iterableObj) {
 console.log(i);
}

function* yeti() {
  yield 10;
  yield 20;
  yield 30;
}

let bigfoot = yeti()
for (h of bigfoot){console.log(h)}


let i1 = 0; // we have i already declared and assigned

for (; i < 3; i++) {
  // no need for "start"
  alert(i); // 0, 1, 2
}

//while .. do while loop
//differnce betwwen for and do

// the conditions use before intialexpression in the do..while loop
//syntex of loop:
// do { //body }  while( condition )
//there is no place for negative numbers
// program to display numbers
let z = 50
let p = 55
do{console.log(z);z++}while(z<=p)
//calculate 
let kal = 0
let lak = 5
do{kal+=lak}while(kal<=5);
console.log(kal);
//infinite while loop
//let infi = "i" 
//do{console.log(infi)}while(infi=="i"); // danger to use

//break statement
//it used to stop loop when it's caputure by if statment
// program to print the value of i
for(speed=100;speed>=90;speed++){if(speed===120){break;};console.log(speed);};

  //for (----------condition-------------){if(-condition--){break;}; body//------------;};
  // for.. loop body under,    if condition and statement. break statment under body of if statment, then you use console.log for show code. 


//Break with While Loop, if you not add ++ method in as expression then you loop couldnot stop.
  let activa = 10
do{activa++;if(activa==24){break;};console.log(activa)}while(activa>=9)

//most useful trick
//condition:  terminate loop if its increased more than 30
q=10
do{++q;if(q>=30){break;};console.log(q)}while(q>=9) 

//Break with nested Loop
//nested loop

for(i=1;i<=1;i++){for(o=1;o>=0;o++){if(o==6){break;};console.log(`numbers : ${i} : ${o}`)}}
// first loop evaluates true then after its goin to nested loop
//if nested loop evaluates goin false value then terminate loop

//continue loop
for(sp=100;sp<=150;sp++){if(sp<=130){continue;};console.log(sp);};
// that u see in upper case that iteration starts from 131 
// reason : continue statament skip last iteration (if iteration)
//continue is oppsite of break that skips current iteration of the loop
//that skips last iteration of the for loop

//while loop on continue statement
s=1
do{s++;if(s<30){continue;};console.log(s)}while(s<=50);
w=5
do{w++;if(w<10){continue;};console.log(w)}while(w<=20)
//its skipp current iteration until conditional iteration wasn't arrive with truth.





