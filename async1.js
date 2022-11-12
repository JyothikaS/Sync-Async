console.log(1)
function task(age){
    return new Promise(function (res,rej){
        // database call
        if(age >= 18){
            setTimeout(function(){
                res("jinu")
            },5000)  
        }
        else{
            setTimeout(function(){
                rej()
            },5000)
        }
    })
}








function greet(name){
    console.log(name)
}
greet("jinu")
let fullname = "swarna das";

let firstname = fullname.substring(0,6)
console.log(firstname)
// task(16).then(function (res){
// console.log(res)
// })
// .catch(function (res){
// console.log(res)
// })

async function work(){
try{
let data = await task(16);
console.log(data)
}
catch{
    console.log("not found")
}
}
work();


let person = {
    name:"anjali",
    age:20,
    place:"trissur",
    department:"da",
    email : "anjali@gmail.com"
}
let colors = ['red','blue','gray','green','yellow','black'];
// let red = colors[0];
// let blue = colors[1];
// let gray = colors[2];
// let green = colors[3];
// let yellow = colors[4];
// let black = colors[5];
let [green,red,yellow,blue] = colors;
console.log(green,red,yellow,blue)

// let fname = person.name;
// let age = person.age;
// let place = person.place;
// let department = person.department;
// let email = person.email;
// console.log(fname,place,department,email);
//es6 destructuring
// datastructures object array
let {name,age,place,department,email} = person;
console.log(name,place,department,email);
// call by reference vs call by value
// -----------------------------------------
// call by value
// spread operator
let modcolor = [...colors]
modcolor[0] = "RED";
console.log('------------------------------------')

console.log(modcolor);
console.log(colors)
let nandana = {...person};
nandana.email = "nandana@gmail.com"
nandana.name = "nandana";

console.log(nandana)
console.log(person)
console.log(3)
console.log(4)