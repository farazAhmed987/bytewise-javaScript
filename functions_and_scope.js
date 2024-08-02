const comFunction = function (){
    console.log("hello world!")
}

let num1= 43;
let num2=45;

function addTwoNums(val1,val2){
    return val1 + val2 ;
}
console.log(addTwoNums(num1,num2));
console.log("twenty",3)

const ArrowFunc = (name, age)=>{
    return `Name of person is ${name} and its age is ${age}`
}
console.log(ArrowFunc('Bilal',23))

const language = ['python','cpp','java','js','HTML']

const myLang=(getLang)=>{
    return `The current learning language is ${getLang[3]}`
}
console.log(myLang(language))
console.log(myLang(['python','cpp','java','javaScript','HTML']
))

let user = {
    uName : "Aashir",
    uId   : '23hs678',
    uEmail: "user@gmail.com"

}

const userData = (users)=>{
    return `The name of user is ${users.uName}, its Id is ${users.uId}, and its email is ${users.uEmail}.`;
}
console.log(userData(user))

console.log(userData(
    {
        uName: 'Usaman',
        uId: 'anwh823u',
        uEmail: 'usman@yahoo.com'
    }
))

const addSeveral = function(num1,num2,...num){
    return num;
}
console.log(addSeveral(2,3,4,5,6))

if (true)
{
    let a=30;
    const b=20;
    var c=40;

}
console.log(c)
let a=7;
b=36;
c="eight";
const outerFunc = function (a){
    let username="usama";
    const innerFunc=()=>{
        let password="arn3iru9w"
        console.log(username)
    }
    innerFunc();
    console.log(password)
}
// outer func is not executed due to local scope problem
// outerFunc();

console.log(executedFunc());


 function executedFunc(){
   return "the function will execute rether it is run before its definition or after,due to hoisting";
}


(function Immediate(){
    console.log("run immediately");
})()