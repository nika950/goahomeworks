
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {

    const emailInput = document.querySelectorAll('.input')[0].value.trim();
    const passInput = document.querySelectorAll('.input')[1].value.trim();


    const storedUser = JSON.parse(localStorage.getItem('user'));


    if (!storedUser) {
        alert('მომხმარებელი არ არსებობს! ჯერ გაიარეთ რეგისტრაცია.');
        return; 
    }

    if (emailInput === storedUser.userEmail && passInput === storedUser.userPass) {
        alert('ავტორიზაცია წარმატებულია! გადადიხართ მთავარ გვერდზე.');
        

        window.location.href = "page.html"; 
    } else {
        
        alert('იმეილი ან პაროლი არასწორია. სცადეთ თავიდან.');
    }
});