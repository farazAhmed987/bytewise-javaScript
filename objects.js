
// non singleton Object
const student={
    studentName : 'Usama',
    "class" : 9,
    
    regNo : 23413,
    email : "usama@gmail.com",
    attend : true

}
student.section= `'C'`;

console.log( student.studentName)
console.log( student.section)
console.log( student['class'])



const symb = Symbol("key1")
const Symbool = {
    [symb] : 'next key'
}

console.log(Symbool[symb])


//  singleton Object

const sObject = new Object ()

sObject.objName ="singleton";
sObject.objClass= false;
    

console.log(sObject.objName)
console.log(sObject["objClass"])
//-------------------------------------

const user = {
username: {
    fName : "Umar",
    lname : "khan"
},
email : "ukhan@yahoo.com",
id : "djn2e2e1n",
loggedIn : false 

}
console.log( user.username.fName);

console.log(Object.keys(user));
console.log(Object.values(user));
user.objFunction = function (){
    console.log(`the username is ${this.username.fName} ${this.username.lname} and its id is ${this.id}`)
}
user.objFunction();
const fUser = {
    uname : "Ali",
    Email : "a@google.com",
    loggedIn : true

};
const sUser = {
    uname : "Basim",
    Email : "b@google.com",
    loggedIn : false

};
const tUser = {
    uname : "Daniyal",
    Email : "d@google.com",
    loggedIn : false

};

const embObj = Object.assign({}, fUser , sUser , tUser )

console.log(embObj===fUser)


const fObj = {...fUser,...sUser}
console.log(fObj)


// object destructuring

const Course = {
    courseName : "js",
    cTitle : "jskrpt",
    cId : "js2453224898",

}

const {courseName} = Course;
// console.log(courseName);
const {courseName: cName} = Course;
console.log(cName);




