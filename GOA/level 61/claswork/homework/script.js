const cartForm = document.getElementById('cart-form');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const discountMsg = document.getElementById('discount-msg');

let cart = [];

function renderCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} - $${item.price} x 
                <input type="number" value="${item.quantity}" min="1" style="width: 40px" onchange="updateQuantity(${index}, this.value)">
            </span>
            <span>$${itemTotal.toFixed(2)}</span>
            <button class="remove-btn" onclick="removeItem(${index})">წაშლა</button>
        `;
        cartItemsList.appendChild(li);
    });

    
    let finalTotal = total;
    if (total > 100) {
        finalTotal = total * 0.9; 
        discountMsg.innerText = "გამოყენებულია 10%-იანი ფასდაკლება!";
    } else {
        discountMsg.innerText = "";
    }

    totalPriceElement.innerText = finalTotal.toFixed(2);
}

cartForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newItem = {
        name: document.getElementById('name').value,
        price: parseFloat(document.getElementById('price').value),
        quantity: parseInt(document.getElementById('quantity').value)
    };

    cart.push(newItem);
    cartForm.reset();
    renderCart();
});

window.updateQuantity = (index, newQty) => {
    cart[index].quantity = parseInt(newQty);
    renderCart();
};

window.removeItem = (index) => {
    cart.splice(index, 1);
    renderCart();
};

function toggleLogo() {
    const overlay = document.getElementById('logoOverlay');
    overlay.classList.toggle('active');
}






// function addItem() {
//     const nameInput = document.getElementById('pName');
//     const name = nameInput.value;
//     const cartItems = document.getElementById('cartItems');

//     // ვამოწმებთ, არის თუ არა ჩაწერილი "ლუკა"
//     if (name === "ლუკა") {
//         // ვქმნით ახალ ელემენტს უსასრულო ციკლისთვის
//         const loopDiv = document.createElement('div');
//         loopDiv.className = 'cart-item';
//         loopDiv.style.color = "#dc3545"; // წითელი ფერი ეფექტისთვის
//         loopDiv.style.fontWeight = "bold";
        
//         cartItems.appendChild(loopDiv);

//         let count = 0;
//         // უსასრულო თვლის დაწყება (ყოველ 100 მილიწამში)
//         setInterval(() => {
//             count++;
//             loopDiv.innerHTML = ლუკას ციკლი: ${count};
//         }, 100);
//         nameInput.value = ''; // ვასუფთავებთ ინპუტს
//         return; // ვაჩერებთ ფუნქციას, რომ სტანდარტული პროდუქტი არ დაამატოს
//     }

//     // აქ რჩება შენი ჩვეულებრივი კოდი პროდუქტის დასამატებლად...
//     const price = parseFloat(document.getElementById('pPrice').value);
//     const qty = parseInt(document.getElementById('pQty').value);

//     if (name && price > 0 && qty > 0) {
//         // შენი ძველი ლოგიკა პროდუქტის დასამატებლად
//         // ...
//     }
// }



