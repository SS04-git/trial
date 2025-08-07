//variables
// var, let, const
var num = 50;
var num = 80; //can be redeclared and assigned
console.log("the number is",num);// the , doesnt fully concatenate so use '+'
console.log("the following number is "+num);

let num1 = 100;
num1 = 120;// can only be reassigned
console.log("next", num1);

const num2 = 20 // cannot be reassigned or redeclared once logged/declared
console.log(num2)

let abc=30;
abc = "good morning"
console.log(abc);

//arithmetic operator
var x = 150
var y = 40
console.log(x + y)

// or
let s = 140
let r= 10
let result = s+r
console.log(result)

let result1 = s-r
console.log(result1)

//assignment operator
let a = 4+2 // or
let b = 4
b += 2 // a = 4+2
b*=3 //a = (4+2)*3
console.log(a)
console.log(b)
console.log(typeof(b))

let c="2" //string
let d= 2// number
let res = c+d //concatenate
console.log(res)
console.log(typeof(res)) //when concatenated the datetype becomes string

let result4= "2" +2 +2  //converts to string
console.log(result4)

//Sccopes in Js
let v = "hello"
{
    console.log(v) // blog scope
}

//when declarationa and initialization is outside of scope
{
    let t = "hello"
    
}
let t  = 6
console.log(t)


//Conditional statements
//format:
//if(condition) {statement} //if its true it works or it goes to the else
   // else {statement}

let value = 10
if(value == 10){
    console.log("yes")
}

if(value >= 10){
    console.log("yes")
}

if(value > 10){
    console.log("yes") //wont print anything
}

if(value > 10){
    console.log("yes")
}
else{console.log("no")}

//checking if value is even or odd
let value1 = 11
if( value1 % 2 == 0){
    console.log("this value is even")
}else{
    console.log("this is odd!")
}

//categorisation
let studentMarks = 79;

if (studentMarks >= 90) {
    console.log("A")
}else if (studentMarks >=80 && studentMarks <=90) {
    console.log("B")
}else if(studentMarks >=70 && studentMarks <=80) {
    console.log("C")
}else {
    console.log("P")
}


//code to print numbers from 1 to 50 using if-else
//for (start, counter, end) {condition}   →format

//increment and decrement operator
for (let n = 50; n>=1; --n){
    console.log(n);     // decrement
}

for (let m = 1; m <= 50; ++m) {
    console.log(m);     // increment
}


//array
let arr=[1,2,3,4,5]
for( let i=0; i < arr.length; i++){
    console.log(arr[i]);
}

//print values of array which are on even index
let arr1=[1,2,3,4,5]
for( let i=0; i < arr1.length; i+=2){
    console.log(arr1[i]);
}


// object
let obj={
    //key:value
    name1:"Sara",
    contact: 79528643384,
    isAdult: true,
    address: {
        city: "Blr"
    },
    hobby: ["coding", "watching films and series", "dance"]
}
console.log(obj)


//function
function fun(){
    console.log("hello")
}
fun()

function fun1(a,b){
    return a+b
}
console.log(fun1(2,3))
console.log(fun1(10,3))
console.log(fun1(25,12))