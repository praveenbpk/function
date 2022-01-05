/*function praveen() {
    console.log("heeeee");
}
praveen();*/
/*function greets(name){
    console.log("vid"+ name +":)");
}
let name = prompt("enter a name :");
greets(name);*/
/*function add (a,b){
    console.log(a+b);
}
add(10,30);
add(70,70);*/
/*function add(a,b){
    return a+b;
}
let number1= parseFloat(prompt("enter your number"));
let number2= parseFloat(prompt("enter your number"));
let result =add(number1,number2);
console.log("sum of " + result);*/
/*let x = function(num){return num * num};
console.log(x(3));
let y = x(5);
console.log(y);*/
//call back function//
/*function greet(name,callback){
    console.log("hi" + ' ' + name);
    callback();
}
function callme(){
    console.log(" iam call back function");

}
greet("praveen",callme);*/
//----program with set -timeout----//
/*function greet (){
    console.log("hello word");
}
function ccc (name){console.log("hello" + ' ' + name);}
setTimeout(greet,2000);
ccc("praveen");*/
//<-------------set-intervel---------------->//
/*function greet (){
    console.log("hi am praveen");
}
setInterval(greet, 3000);*/

/*function showtime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
}
let display =setInterval(showtime,5000);*/
//------------->use clearInterval ()method-----//
/*let count = 0;
let interval = setInterval(function(){
    count += 1
    if(count === 5){
        clearInterval(interval);
    }
    let dateTime = new Date;
    let time =dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);*/

//arrowfunction=======//
// arrow function with no argument//
//let praveen = () =>console.log("hello");
//praveen();//

//arrow function with one  argument------>//
/*let praveen = (x) => console.log(x);
praveen("kumar");*/
//-------arrow function as an expression-------//
/*let age = 5;
let welcome =(age < 18) ?
() => console.log("baby"):
() => console.log("adult");
welcome();*/
//inside an arrow function------------->//
/*function person() {
  this.name = "praveen",
  this.age = 20,
  this.sayname = function (){
      console.log(this.age);
      let innerfunc = () =>{
          console.log(this.age);
      }
      innerfunc();
  }
}
const x = new person();
x.sayname();*/
//--------object---------//
/*const person = {name:"praveen",age:20};
console.log(typeof person);*/
//------using dot notation-----//
/*const person ={
    name:"kumar",
    age:19
};
console.log(person.name);*/
//bracket notation-----//
/*console.log(person["age"])*/

//-------java script nested object-----------//
/*const room = {
    name:"rinku",
    age:20,
    marks: {
        science:99,
        social:100,
        maths:99
    }
} 
//console.log(room.marks);//
console.log(room.marks.maths)*/
//-------object also  contain function----------->//
/*const vidthiyar = {
    name:"praveen",
    age:20,
    greet: function(){console.log("best pair");}
}
vidthiyar.greet();*/

//<-----------examples of arrays--------->//
//empty array//
/*const mylist =[];
//array of number//
const mynum = [1,2,3,4,5,6];
//array of things//
const mystring = ["praveen","mani","prakash"];
//array with mixed data type//
const mixxed = ['work','praveen',1,true]; */
//---------> functions and other objects inside an array-------->/
/*const newdata = [
    {name:"praveen"},
    [1,2,3],
    function hello() {console.log("hello")}
];*/
//-----access element of an array-------//
 /*const myArray = ['h','k','l','v','p'];
 console.log(myArray[]);*/
 //----add an element to an Array---//
 /*let add = ['eat','sleep','repeat'];
 add.push('praveen');
 console.log(add);
 console.log(add[1]);*/
 //------remove an Element from an array------>//
 /*let dailyactivities = ['work','eat','sleep','excercise']
 dailyactivities.pop();
 console.log(dailyactivities);
 const removeget = dailyactivities.pop();
 console.log(removeget);*/
 //remove the first element//
 /*let remove = ['work','eat','sleep']
 remove.shift();
 console.log(remove);
 console.log(remove.length);*/