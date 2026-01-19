function greeting(){
    let btn = document.getElementById("welcom ")
    console.log("hellow")
    
}
greeting()
let pesron = {
    username :"nika kankia ",
    city : "martvili",
    id : 551305817,
    getCity: function(){
        console.log(this.city)
    }

}
btn.onclick = greeting()


let btn = document.getElementById("sentBtn")
let userfield = document.getEmail("sendByemail")
let welcomeHeader = document.getElementById("welcomeheader")

btn.onclick = function ( ){
    welcomeHeader.textContent = "helow" + userfield.value
}