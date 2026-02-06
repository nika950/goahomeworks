
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

// ფუნქცია, რომელიც შეინახავს მონაცემებს
loginBtn.addEventListener('click', function() {
    // ამოვიღოთ მნიშვნელობები ინპუტებიდან
    const userData = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    // შევინახოთ LocalStorage-ში (ტექსტურ ფორმატში)
    localStorage.setItem('user', JSON.stringify(userData));

    alert('მონაცემები წარმატებით შეინახა!');
    
    // სურვილის შემთხვევაში, გასუფთავდეს ინპუტები შენახვის შემდეგ:
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
});