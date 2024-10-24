let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

document.addEventListener('DOMContentLoaded', function() {
    viewHistory();
});

function viewHistory() {
    const modal = document.getElementById('history-modal');
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    orderHistory.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `Order: ${order.name} - $${order.price}`;
        historyList.appendChild(li);
    });

    modal.style.display = 'block';
}

function closeHistory() {
    const modal = document.getElementById('history-modal');
    modal.style.display = 'none';
}

function clearHistory() {
    orderHistory = [];
    localStorage.removeItem('orderHistory');
    viewHistory(); // განაახლეთ ისტორიის ფანჯარა
    alert('Order history has been cleared');
}
