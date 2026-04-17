// State Management
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let myChart;

// DOM Elements
const form = document.getElementById('expense-form');
const transactionList = document.getElementById('transaction-list');
const totalBalanceDisplay = document.getElementById('total-balance');
const themeToggle = document.getElementById('theme-toggle');
const sortFilter = document.getElementById('sort-filter');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    initChart();
});

// Add Transaction
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('item-name').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    const newTransaction = {
        id: Date.now(),
        name,
        amount,
        category
    };

    transactions.push(newTransaction);
    saveAndRefresh();
    form.reset();
});

// Delete Transaction
function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveAndRefresh();
}

// Save to LocalStorage & Refresh
function saveAndRefresh() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateUI();
    updateChart();
}

// Update UI Components
function updateUI() {
    // Sort logic
    let sortedData = [...transactions];
    const sortVal = sortFilter.value;
    if (sortVal === 'amount-high') sortedData.sort((a, b) => b.amount - a.amount);
    if (sortVal === 'category') sortedData.sort((a, b) => a.category.localeCompare(b.category));
    if (sortVal === 'newest') sortedData.reverse();

    transactionList.innerHTML = '';
    let total = 0;

    sortedData.forEach(t => {
        total += t.amount;
        const li = document.createElement('li');
        li.className = 'transaction-item';
        li.innerHTML = `
            <div>
                <strong>${t.name}</strong> <br>
                <small>${t.category}</small>
            </div>
            <div>
                <span>Rp ${t.amount.toLocaleString()}</span>
                <button class="btn-delete" onclick="deleteTransaction(${t.id})">X</button>
            </div>
        `;
        transactionList.appendChild(li);
    });

    totalBalanceDisplay.innerText = `Rp ${total.toLocaleString()}`;
}

// Chart.js Logic
function initChart() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Food', 'Transport', 'Fun'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        }
    });
    updateChart();
}

function updateChart() {
    const categories = ['Food', 'Transport', 'Fun'];
    const dataValues = categories.map(cat => {
        return transactions
            .filter(t => t.category === cat)
            .reduce((sum, t) => sum + t.amount, 0);
    });

    myChart.data.datasets[0].data = dataValues;
    myChart.update();
}

// Dark Mode Toggle
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Light Mode';
} else {
    themeToggle.textContent = '🌙 Dark Mode';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Sort Event
sortFilter.addEventListener('change', updateUI);