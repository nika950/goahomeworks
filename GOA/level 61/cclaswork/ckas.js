// dom{
//     properties - კუთვნილება 
//     method - მეთოდი
//     events - მოვლენა 
// }


// const myItem = document.getElementById( "product")

// let myBtn = document.createElement("button");


// myBtn.textContent = "Click me"

// document.body.appenddChild(myBtn)

// let btn = document.querySelector("butttn")

// btn.onclick = function(){
//     let btnParent = btn.parentNode
// }

// let div = document.querySelector("div")
// let btn = document.querySelector("btn")
// let p = document.querySelector("p")

// console.log(btn.previousSibling)

//node -გვაძლევს საშუალებას რო გავუშვათ კოდი ბრაუზერში
//sibling -გადასცემს ან ნოუდს ან მისივე მშობელ ელემენტს
//appendchild - გამოვიყენოთ ინსერთი ახალ კოდში 
//removechild - აგდებს ამოაქვს კოდი
//nextsibling - შემდეგი მომდევნო კოდი
//createlement - ქმნის ელემენთს





const products  = [
    {name:"product",price:"100,000", desc: "axali damkvirvebeli topp"},
    {name:"product1",price:"100,000", desc: "axali damkvirvebeli topp"},
    {name:"product2",price:"100,000", desc: "axali damkvirvebeli topp"}
]

const productConteiner = document.getElementById("productsConteiner");
const cartsConteiner = document.getElementById("cartsConteiner");

for(let i = 0; i< products.length; i++){
    let currentProduct = product[i];


    const productDiv = document.createElement("div");


    const productHeader = document.createElement("h2")
    productHeader.textcontent = currentProduct.name;

    const productP = document.createElement("P")
    priceP.textContent = "description:"+ currentProduct.desc


    const productIcon = document.createElement("img")
    productIcon.style.width = "200px"
    productIcon.style.height = "200px"


    const buytn = document.createElement("button")
    buybtn.textcontent = "buy"


    productrDiv.appendChild(productHeader)
    productrDiv.appendChild(priceP)
    productrDiv.appendChild(h2)
    productrDiv.appendChild(buybtn)

}

for(let i = 0; i< products.length; i++){
    let currentProduct = product[i];


    productConteiner.innerHTML +=
    <div class='product'>
        <h2>${currentProduct.name}</h2>
        <p> Price $${currentProduct.price}</p>

    </div>
}


