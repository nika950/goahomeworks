const person = {
    username: "nika",
    occupation: "coding",
    interest: ["chess", "matematic"],

    get header() {
        return `${username} is ${this.occupation} and is mostly in ${this.interest[0]}`
    },

    set interest (value){
        this.ocupation = value;
    }
}

console.log(person.header)
person.interest ="web development"

// 2


class Square{
    constructor(width){
        this.width = width;
        this.height = width;
    }


    get area(){
        return this.width * this.height
    }


    set area(val){
        this.height = Math.sqrt(val);
        this.width = this.height;
    }
}

let squere1 = new Square(4);

console.log(square1.area)

square1.area = 36

console.log(square1.width)

//geter metodi gamoiyeneba mnishvnelobis wasakitxad

//seter metodi gamoiyeneba mnishvnelobis misanweblad




class Bank{
    #balance;

    constructor(user,email,password,balance){
        this.user = user,
        this.email = email,
        this._password = password,
        this.#balance = balance
    }
    get password(){
         let displayPass = this.password.length * "#"
        return this._password;
    }

    get balance(){
        return  `Balance is ${this.balance}}`;
}
set balance(newBalance){
    if(newBalance < 0){
        console.log("balance must be positive")
    }else{
        this.#balance = newBalance;
    }
}
}

let account1 = new Bank("luka", "nikakankia@gmail.com", "nikanika",400)
account1.password
