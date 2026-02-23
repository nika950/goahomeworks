const box = document.getElementById("child")
let positionX = 0
let positionY = 0
let direction = "right"
function  move(){

if (direction === "right"){
    positionX ++;
    if(positionX >= 150){
        direction = "bottom"
    }
}
    if (direction >= "bottom"){
        positionY++;
        if(position <= 0){
            direction = "top"
        }
    }

if (direction === "top"){
    positionY--;
    if (direction = "left"){
        direction = "right"
    }
}
box.style.left = '${positionX}px'
box.style.top = '${positionY}px'
box.style.right = '${positionXpx'
box.style.bottom = '${positionY}px'

}




