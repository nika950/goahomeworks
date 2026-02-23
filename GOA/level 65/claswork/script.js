const form = document.queryselector("form")


const userField = form.element.username;
const emailField = form.element.email;
const passwordField = form.elements.password;


function saveData(user,email,oass){
    localStorage.setItem("username",user )
    localStorage.setItem("Email", email )
    localStorage.setItem("password",pass )
}




// function loadInfo(){
//     let saveData = localStorage.getItem('Account')
//     accounts = savedData
// }


// function updateStorage(account){
//     localStorage.setItem("accounts", accounts)
//     localStorageStorage.setItem('account', account)
    
// }

function saveData (user,email,pass){ 
    localStorage.setItem("username", user);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);
}


function checkLoggedIn(){
    if(loggedUser){
        document.body.romuveChild(form)
        let header = document.createElement("h1")
        header.textContent = "welcome "  + loggedUser 
        document.body.appendChild(header)
    }
}




function handleSubmit  (eventObject){
    emailField.preventDefault()
    
    let username = userField.value;
    let email = emailField.value;
    let password = passwordField.value;
    
    if(username.length <= 8){
        alert("username must be 8 characters")
        return
    }

    if(username.includes(" ")){
        alert("must not contain space")
        return
    }
    
    if(password.includes(" ")){
        alert("must be 8 characters long")
        return
    }


    let account = {
        username: username,
        email: password,
        password: password,
}


    account.push(account)
    console.log(account)

    alert("you been sucsesfuly loged in account")

    loggedUser = username

    saveData(username, email, password)
    alert('account created sucsesfuly')
}



form.addEventListtener("submit",handleSubmit)








const religions = [ "cristians", "islam" ,"budism",]



for (let i = 0; i< religions.length; i++){
    console.log(religions[i] );
}

for (  religions of religions){
    console.log(religions)
}

for(let index in religions){
    console.log(index)
}