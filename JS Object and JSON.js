// 1.object sample
const student = { name : 'sunny', IsalmabetterStudent : true};

console.log(typeof student.IsalmabetterStudent);
// 'typeof' is use for see which type of data

// 2.nested object of JS. Nested means object under object
const class1 = {
  name : 'sam',
  marks : {science : 100, maths : 100, sociologist : 100, literature : {gujarati : 100, english : 100}} 
}; //key+value = property
console.log(class1.name);
console.log(class1.marks);
console.log(class1.marks.literature);

//3. function in object (function+value=method) //in method. console.log() is not necessary for show
const method1 = {function1 : function() {console.log('method = Function + value')}}
method1.function2 = function() {console.log('property = keys + value')}
method1.function1() //console.log() is not required 
method1.function2()

//4 function 
function6 = function() {console.log(123, 'life')}
function6()

// this. keyword : is used to copy other value in them. 
let object2 = {name : 'agent003', object2f : function() {console.log('my name is'+" "+this.name)}};
object2.object2f();

object3 = {name : 'agentindira',  bio: function() {country = 'india'; console.log('my' + country + this.name)} }
object3.bio();
//you can create new variable in the nested bracket though-out using method. //under the {}

//create object without using blocks
let object4 = { };
object4.name = 'sam'
object4.surname = 'shah'
console.log(object4);


//set : collection of unique values*************************************************************************

//create 
//1 . 
let india = new Set(['gujarat','himachal pradesh', 'UT Ladakh']);
console.log(india);
//2. 
let gujarat = new Set();
gujarat.add('Ahmedabad');
gujarat.add('baroda');
gujarat.add('surat');
console.log(gujarat);
//3/
let Ahmedabad = new Set()
let a = 'Naroda'
let b = 'Bapunagar'
let c = 'C.G Road'
Ahmedabad.add(a)
Ahmedabad.add(b)
Ahmedabad.add(c)
console.log(Ahmedabad);

//operation : add,delete,has,clear,forEach,Entries,values,key

let practice = new Set(['a',1,'3',4,'b','c','d','e']);
practice.add('f');//add
practice.delete('f');//remove
practice.has('f');//has false
practice.has('a');//has true
practice.clear();//clear all the values
console.log(practice);

practice = new Set(['black','white','blue','red','green'])
console.log(practice);

//hard operation of js object : 

//entries
husband = practice.entries();
text = "";
for (let wife of husband) {text += wife};
console.log(text)

//values
son = practice.values();
daughter = "";
for (let grandson of son) {daughter += grandson}
console.log(daughter);

//forEach
text1 = ""
practice.forEach(function(youngestson){text1 += youngestson});
console.log(text1)


//MAP ************************************************************************************************

let Map1 = new Map([['alexandria', false],['gemma', true ],['jenifer', false]]);
//add (Set)
Map1.set('karina',false)
console.log(Map1)
//delete
Map1.delete('karina')
//has
console.log(Map1.has('karina'));
console.log(Map1.has('gemma'))
//clear
Map1.clear()
console.log(Map1)
//ADD AGAIN

Map1 = new Map([['petrol',95.56],['diesel',100.5],['CNG',60]])
BJP = "";
Map1.forEach(function(citiZen){BJP += citiZen});
console.log(BJP);

//keys
Congress = Map1.keys();
RahulGandhi = "";
for (let idiot of Congress){RahulGandhi += idiot};
console.log(RahulGandhi);

//Values
Congress1 = Map1.keys();
RahulGandhi1 = "";
for (let idiot1 of Congress1){RahulGandhi1 += idiot1};
console.log(RahulGandhi1);


//entires
RuleofIndia = Map1.entries();
President = "";
for (let CentralGovt of RuleofIndia){President += CentralGovt};
console.log(President);

console.log(typeof Map1)


