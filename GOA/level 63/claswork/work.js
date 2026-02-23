// let btn = document.querySelector("button")


// function handleButton (){
//     if (e.key === "e" || e.key === "E"){
//         console.log("you are right")
//     }
// }

// // inputField.addEventListener("resize",handleSomething)



let images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
];

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const image = document.getElementById("img");


let currentImageIndex = 0;

image.src =  images [currentImageIndex]

nextBtn.onclick= function () {
    if(currentImgeIndex > images.length -1){
        currentImageIndex =0
    }
    image.src = images[currentImageIndex]
    currentImageIndex++;
}

prevBtn.onclick (function(){
    image.src = images[currentImageIndex];
    currentImageIndex = 0;
    if (currentImageIndex = image.length -1){
        currentIndex = 0
    }
    image.src = image[currentImageIndex]
    currentImageIndex ++ ;
})

