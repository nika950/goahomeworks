// //terable - monacemta tipi romelic shegvidzlia mapit
// // iterable -gamoidzaxebs punqcias da 
// // dabrunebul punqcias sheinaxavs axal siashi

// let myArr = [3,4,5,7,8,7,53,34]

// function squereNumbers (element){
//     return element ** 2;
// }


// let newArr = myArr.map(element => element **2) 


// function isEven (num){
//     return num % 2 === 0;
// }

// let filteredArr = myArr.filter(isEven)
// console.log(filteredArr)


// function addAll(accumlator, element,){
//     return accumlator += element
// }



// let total = myArr.reduce((acc,element){
//     return acc += element
// })


// class MyArray (
//     consturctor(value){
//         this.value = valuelue
//     }
// )


// function manualMap(iterable, callback){
//     let result = [];

//     for(let item of iterable){
//         result.push(callback(item))
//     }
//     return result;
// }

// function manualFilter(iterable,callback){
//     let result = [];
//     for (let item of iterable){
//         if( callback(item)){
//             result.push(item);
        
//     } 
//     }
//     return result;
    
// }





// class account{
//     constructor(firstName,lastName,emaill,password){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.emaill = email;
//         this.password = password
//     }
// }
// export function getAccountFullName(user){
//     return ` ${user.firstName} ${user.lastName}`
// }
// function getAccountEmaill(user){
//     return  `${user.email}`
// }

// export  {getAccountFullName } ;




async function getData()
{
    const responce = await new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("dddd")
        })
    },2000)
    const data = await trdponse.json();
    console.log()
}

getData()
console.log("heloww world bro")


async function getData(){
    try{
        const reponse = await fetch("")
        const data = await reponse.json();
        data.map((oject) =>{
            document.body.innerHTML+=`
                <h2> ${objext.title}`
        })
        catch(eror){
            console.log(eror)
        }
    }
}
