

// let nameField = "username"

// let account = {
//     ["first name 5"]: "luka",
//     lastname: "password",


//     balance: function(){
//         this.balance += amount
//         balance = 50
//     }
// } 

// account.deposit(25)
// account.deposit(50)


// console.log(account)




// const dataArr = [ "scecdc","erbbvfv","uyiu"]

// let [data1, data2, data3,] = dataArr

// console.log(data1)
// console.log(data2)
// console.log(data3)

// console.log(dataArr)


// const personAccount = {
//     username: "nika",
//     dinosaur: false,
//     height: 1.65

// }

// const{username,dinosaur, height} = personAccount

// console.log(username)
// console.log(height)
// console.log(dinosaur)

// let name ={
//     username: "nika",
//     lastname: "kankia"
// }

// {username, password, lastname = "kankia"}
// {{username:firstname, lastname, lastname = "kankia"}  name}

// function anithing(argument1, ...otherArguments){
//     console.log(`first argument  ${arguments1}` )
//     console.log(`other arguments  ${otherArguments}`)
// }




class Account {
    consturctor(firstName, lastName, email, password, balance){
        this.firstname = firstname;
        this.lastname = lastName;
        this.email = email;
        this.password = password;
        this.balance = balance;
    }

    deposit(){
        this.balance += 100
    }

}

let obj1 = new Account("nika","kankia", "nika@gmail.com", 67)
let obj2 = new Account("nika", "bea", "@gmail.com", "67", 67)


Account.logArguments()


console.log(obj2.password)