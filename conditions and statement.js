// if statement : syntex of if conditions *****************************
// let i=10
// if (conditions) {body}
// if (i>5){console.log(true)}
// console.log('false")


const i = 10;
if (i < 5){console.log('you are right buddy')};

// if....else statement : syntex of if....else statement *************
// if(condition){//body}
//else{//body}
const a = -10;
if (a < 0){console.log('winnner')}
else{console.log('loser')}

//if.. else if.. if.. conditions
const score = 150
if(score > 200){console.log("first answer has wrong")}
else if(score > 10000 ){console.log('second answer has wrong')}
else{console.log('you "fail" because your upto both two answer have wrong')}

//nested if else statement
//syntex
//if(){  if(){}  else{} }
//else{}

//note: 1 evaluates false than denied access to nested condition
//note: 1 evaluates true than got acess to nested if condition
//note: 1 evaluates true but nestes if evaluates false then you got nested else statement as result
const numbers = 10 
if(numbers < 100){if(numbers!==10){console.log('right if 1')}else{console.log('wrong but you have final access')}}
else{console.log('wrong but and you denied acess nested statement')}

//second time
const numbers1 = 1000;
if(numbers1>100){if(numbers1>10000){console.log('true')}else{console.log('false')}}
else{console.log('getout')};

//thrid time
let word = "a";
word1 = "a";
wrong = 0
right = 1
if(word===word1){if(wrong&&right){console.log('right')}else{console.log("not right")}}
else{console.log('not mentioned')};

// start with logical operator
let arm1 = 0
arm2 = 1
if(arm2||arm1){if(!arm2){console.log('you are eligible right')}else{console.log('you second answer is wrong')}}
else{console.log('you are not eligible for given wrong statment on both two answer')};

//Switch statement : its switch statement of condition when its match by a value
let sunny = {'nickname' : 'sam', }

switch (sunny.nickname){

    case 'recker':
        sunny.nickname = 'recker is wrong'
        break;
    case 'sam':
        sunny.nickname = '"good job"'
        break;
    default:
        sunny.nickname = 'fail'
        break;

}
console.log(`${sunny.nickname} you have succefully tested on it as object value sunny`);


let details = {'name':'Aakash', 'age':37, 'occupation':'It Consult'};
switch(details.name,details.age,details.occupation) {

    case 'sunny',24,'Web Developer':
        details.name = 'wrong'
        details.age = 'wrong'
        details.occupation = 'wrong'
        break;

    case 'Aakash',37,'It Consult':
        details.name = 'right'
        details.age = 'right'
        details.occupation = 'right'
        break;

    default:
        details.name = 'fail'
        details.age = 'fail'
        details.occupation = 'fail'
    
}
console.log(details)

let detailofarmy = {'name':'vikram batra', 'Rank position':'captain', 'country':'india'};

switch (detailofarmy.name,detailofarmy.Rank,detailofarmy.country){
    case {'name':'samion','Rank':'sergant','country':'Mexico'}:
        detailofarmy = false 
        break;
        case {'name':'vikram batra', 'Rank position':'captain', 'country':'india'}:
            detailofarmy = true 
            break;
            default:
                detailofarmy = "good job u are tried much harder than you show"
                break;
 
}
console.log(`we got ensure you that an information as result is ${detailofarmy}.`);

let last_data_of_student = {sunny:{'name':'sunny shah','age':'23'},priyanka:{'name':'priyanka saudagar','age':'33'}}
switch(last_data_of_student.sunny.name,last_data_of_student.sunny.age,last_data_of_student.priyanka.name,last_data_of_student.priyanka.age)
{
    case 'sunnyas chauhan',9,'priyankas saudagar',30:
        last_data_of_student.sunnyas.name='verified'
        last_data_of_student.sunnyas.age='verified'
        last_data_of_student.priyankas.name='verified'
        last_data_of_student.priyankas.age='verified'
        break;

    case 'sunny shah','23','priyanka saudagar','33':
    last_data_of_student.sunny.name='verified'
    last_data_of_student.sunny.age='verified'
    last_data_of_student.priyanka.name='verified'
    last_data_of_student.priyanka.age='verified'
    break;

    default:
        last_data_of_student = 'faillllll'
        break;

}
console.log(last_data_of_student);
// note : if we want to true evaluates then varible value must match with switch case value
// case + value of variable under scope = result
// match(case) + match(v.u.s) = true
//if those varible not matched then we will got default result which has stant of non-align value
let call;
const cal = 'sam'
const lac = 'mas'
firstvalue = 20
secondvalue = 20

switch (cal){

    case 'Subt':
        call = firstvalue-secondvalue
    
    break;
    case 'sam':
        call = firstvalue + secondvalue
        
        break;
        default:
            cal = 'cal'
            break;
}
console.log(call);
switch (lac){

    case 'mas':
        call = firstvalue-secondvalue
    
    break;
    case 'sam':
        call = firstvalue + secondvalue
        
        break;
        default:
            cal = 'cal'
            break;
}
console.log(call)

//switchpractice
 let brand = 'samsung'
 switch (brand) {
    case 'apple':
    case 'nokia':
    case 'blackberry':
    break;
    default:
        console.log('Mr.Shah used to samsung s20 fe 5g smartphone, he told me that is phone good camara')
        break;

    
 }


 // what if i forgot to 'break;'
 let brand1 = 'samsung'
 switch (brand1) {
    case 'samsung':
        console.log("that happen when you forgot the code");
    case 'nokia':
    case 'blackberry':
    default:
        console.log('samsung s20 fe 5g smartphone, he told me that is phone good camara')
        break;}
// you can show that break automatically stop when code block but your matched value and default value show same time 
//     
 // what if i forgot to 'break;'

 //what happen when include case after set default value

 let brand2 = 'samsung'
 switch (brand2) {

    default:
        console.log('samsung s20 fe 5g smartphone, he told me that is phone good camara')
        //break; : if you use that default value set automatically instead of true value and then true value will have skipped as false value

    case 'samsung':
        console.log("that happen when you forgot the code");
    case 'nokia':
    case 'blackberry':
 }
    
 //interview question
 
 let age = 15;
 if(age>=18){console.log('you are eligible for vote')}
 else{console.log('you are not eligible to vote yet')};

 //similiar but little bit different if...else
 let voterage = 18
 let de = (voterage>=18)?"you are eligible to vote":"you are not eligible"
 console.log(de);