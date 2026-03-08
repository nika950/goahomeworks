// class Human{
//     constructor(username){
//         this.username = username;
//     }

//     heal(){
//         console.log("first aid")
//     }
// }

// class Doctor extends Human {
//     costructor(username,rank){
//         super(username)
//         this.rank = rank;
//     }

//     heal(){
//         console.log(`${this.username} is curent `)
//     }
// }

// let person1 = new Human("joe")
// persone1.heal()

// let house = newDoctore ("Dr.House")
// house.heal()

// console.log()







// let myArray = [1,2,3,4,5,6]
// let mySet = new Set (myArray)

// mySet.add(6) //amatebs
// mySet.delete(5) //shlis
// mySet.has()

// console.log(mySet)



// const myMap = new AudioParam(
//     [
//         ["username", "pavle"],
//         ["giorgi",6],
//         ["nika",4],
//         [3, "ika"],
//         [true,5],
//     ]
// )
// console.log(myMap)



// myMap.set("key ","value") 
// myMap.set()
// myMap.delate(true)
// myMap.log(mySet)
// console.log(mySet.has(1))
// mySet.clear()

// const a= () => {console.log("a")}
// const b = () => {console.log("a")}

// let testObject = {
//     [a]: a,
//     [b]: b,
// }
// console.log(testObject)


// const testMap = new Map (
//     [
//         [a,226],
//         [b,12],
//     ]
// )

// console.log(testMap).get(a)
// console.log(testMap).get(b)





//promise
// 1 thread 

// const promise = new Promise ((resolve, reject) =>{
//     setTimeout(()=>{
//         myNymber +=5;
//     } ,4000)
//     let myNumber = 5 + 5;

//     if(myNumber ===10 ){
//         resolve( "promise fulfiled")
//     }else{
//         reject ("faild")
//     }
// })


// promise
// .then((result) => {
//     console.log(result)
// })



let main = document.querySelector("main");

function  renderInfo(info) {
    console.log(info)

    main.innerHTML += `
    <div>
        <h2>${ info.name}</h2>
        <img src = "${info.avatar_url} >
        <p> Bio: ${info.bio}</p>
        <p> folowers: ${info.folower} </p>
        <p> folowing: ${info.folowing} </p>
    </div>`
    
}


let promise = fetch("https://api.github.com/users/${username}")

promise 
    .then(responce  => responce.json())
    .then(data => console.log(data))



    // thread- gamshvebi xazi
    // fetch - saitis profilis gadmotana
    // json - monacemis shenaxvis da gadacemis pormati