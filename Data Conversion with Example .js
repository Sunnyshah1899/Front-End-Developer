

// There are 5 primitive data type, 3 Non-Primitive data Type,
// primitive is : number-123, string-"abc", boolean-"true" or "false", undefined-?, null-{}.
// Non-primitive is : array[], function, object.

// 3 type of ways to declare variables - you can save your data in variable for temporary.
//Var - Replaceable
//let - Overwrite
//const - Not replaceable and no overwrite the data.

// 2 ways of data conversion.
//implicit - Auto data conversion.
//explicit - Manual data conversion.
 
// 2.1.1 : Implicit Conversion to Strings
//Note : "" is compulsory to describe a string in the scope 

let result;

result = "sam" + 3;
console.log(result);

result = "200" + true;
console.log(result);

result = "200" + undefined;
console.log(result);

result = "200" + null;
console.log(result);
 
//2.1.2 Implicit data conversion to number

let result1;

result1 = "4" - 1 ;
console.log(result1);

result1 = 4 * false ;
console.log(result1);

result1 = 4 - null ;
console.log(result1);

result1 = 4 - undefined;
console.log(result1);

result1 = 4 - "kemcho";
console.log(result1);

// 3. explicit conversion
// you have to add value to data type with braces which 
// - do you want to convert into them and save your value under scope of data type

//you can type string() if do you want convert other data into string.

let a;

a = String(null);
console.log(1);

a= String(undefined);
console.log(a);

a= String(231+213);
console.log(a);

a= String("231"+"213");
console.log(a);

a= String(undefined);
console.log(a);

// ,toString() is Convert all things on to String rather than Null.
a= 10 + 2 .toString();
console.log(a);

a= Boolean(1-1); // Boolean Value False when value is lesser than 0 or 0. 
console.log(a); //Boolean Value True when value is Higher Than 1 or 1.

a = Boolean(2);
console.log(a);










