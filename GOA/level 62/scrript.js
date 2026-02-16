// const form = document.quweySelector("form");
// const usernameFIeld = form.element.usernameFIeld
// const emailFIeld = form.element.emailFIeld
// const elephoneFIield = form.elementField



// function handleSubmit (eventObject){
//     eventObject.preventDefault();


//     const username = usernameFIeld.value;
//     const email = emailFIeld.value;
//     const telephone = telephoneField.value;
// }
// function presentational(account){
//     dataTable.innerHtml +=
//     <tr>
//         <td>${username}</td>\
//         <td>${email}</td>
//         <td>${telephone}</td>
//     </tr>

// }



let btn = document.querySelector("button")
;
function wraper(){
    setTimeout(welcome, 2000)
    function welcome(){

    }
}


// global ცვლადი ხელმისაწვდომია ყველგან კოდში
// local ცვლადი ხელისმაწვოდმია მხოლოდ ადგილობრივ კოდის ბლოკში და მის ქვემოთ

// let, const, var 

for (let i = 0; i < 5; i++) {
    var user = "luka"
}

// Hoisting - javascript თვისება რომლის მიხედვითაც პირველ რიგში ხდება ფუნქციების შექმნა,
// შემდეგ var ცლვადების დეკლარაცია (და არა ინციალიზება) ხოლო ამის შემდეგ სხვა ყველაფერი ეშვებას ზევიდან ქვევით თანმიმდევრობით


console.log(user)

function OuterScope() {
    let username = "LUKA";

    function InnerScope() {
        for(let i = 0; i < 10; i++) {
            username = username.toLowerCase()
        }
    }
    InnerScope()
    console.log(username)
}

closure

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2

greet()

function greet() {
    console.log("Hello World")
}

declaration 
initlization

while (password !== "luka1234") {
    var password = prompt("Enter a password")
}

// 1ms = 1/1000s

// Timers function

let welcomeHim = false;

const greetTimer = setTimeout(greet, 2000, "Luka")

function greet(username) {
    if (!welcomeHim) {
        console.log("Cancelled")
        clearTimeout(greetTimer)
    }

    console.log(`Hello ${username}`)
}

// timeout ფუნქცია callback-ს გამოიძახებს გარკვეული დროის შემდეგ

let count = 0;

function counter() {
    count++;
    console.log(count)

    if(count >= 15) {
        clearInterval(counterInterval)
    }
}

// setInterval ფუნქცია callback ფუნქციას გამოიძახებს ყოველი გარკვეული დროის ინტერვალით 

const counterInterval = setInterval(counter, 200)

let  = document.querySelector("button")

function wrapper() {
    setTimeout(welcome, 2000)
}
