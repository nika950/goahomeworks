// let x = 10
// function greet(){

// }


//global - ცვლადი ხელმისაწვდომია ყველა კოდში 
// local- ხელმისაწვდომია ლოკალურ და ადგილობრივ კოდში 



// function OutrtScope() {
//     let  username = "RATI";

//     function InnerScope(){
//         let username = "rati"
//         for(let i = 0; i <10; i++){
//             username = username.toLowercase ()

//         }
//     }
//     InnerScope()
//     console.log(username)

// }

// OuterScope()




// function counter = makeCounter  ();
//     console.log(counter())
//     console.log(counter())
//     console.log(counter())


 // Hoisting - javascript თვისება რომლის მიხედვითაც პირველ რიგში ხდება ფუნქციების შექმნა,
// შემდეგ var ცლვადების დეკლარაცია (და არა ინციალიზება) ხოლო ამის შემდეგ სხვა ყველაფერი ეშვებას ზევიდან ქვევით თანმიმდევრობით


setTimeout(greet,3000)

function greet (username){
    console.log("welcome ${username}")
}

//setInterval -0ფუნქცია იზახებს
setInterval(greet,2000,"luka")


let count= 0 

function counter(){
    count ++;
    console.log(count)

    if(count >= 15){
        clearInterval(counterInterval)
    }
}

const counterInterval = setInterval(counter, 1000)




let WelcomeHim = false;

const greeTmer = setTimeout(greet,5000,"luka")

function  greet(username){
    if (welcomeHim)
}