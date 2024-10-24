let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("clearCart").addEventListener("click", function() {
        cart = []; // კალათის გასუფთავება
        updateCart(); // კალათის შიგთავსის განახლება
    });

    document.getElementById("orderCart").addEventListener("click", function() {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            alert("Thank you for your order!");

            // შეკვეთების ისტორიის განახლება
            orderHistory.push(...cart);
            localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

            cart = []; // კალათის გასუფთავება შეკვეთის შემდეგ
            updateCart(); // კალათის შიგთავსის განახლება
        }
    });

    function updateCart() {
        console.log(cart);
        let cartContent = document.getElementById("cartContent");
        cartContent.innerHTML = ""; // ვასუფთავებთ შიგთავსს

        cart.forEach(item => {
            let itemElement = document.createElement("div");
            itemElement.textContent = `პროდუქტი: ${item.name}, რაოდენობა: ${item.quantity}, ფასი: ${item.price}`;
            cartContent.appendChild(itemElement);
        });
    }

    // საწყისი კალათის შიგთავსის ჩვენება
    updateCart();
});
