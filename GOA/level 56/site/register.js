
const registerBtn = document.querySelectorAll('.button')[1]; 

registerBtn.addEventListener('click', () => {

    const name = document.querySelectorAll('.input')[0].value;
    const email = document.querySelectorAll('.input')[1].value;
    const password = document.querySelectorAll('.input')[2].value;

    if (name !== "" && email !== "" && password !== "") {
        
        
        const userData = {
            username: name,
            userEmail: email,
            userPass: password
        };

        localStorage.setItem('user', JSON.stringify(userData));

        alert('რეგისტრაცია წარმატებით დასრულდა!');
        
        
        window.location.href = 'signin.html'; 
        
    } else {
        alert('გთხოვთ, შეავსოთ ყველა ველი!');
    }
});

