// ===============================
// Get HTML Elements
// ===============================

const form = document.getElementById("transactionForm");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

const transactionList = document.getElementById("transactionList");

// ===============================
// Transactions Array
// ===============================

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// ===============================
// Add Transaction
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (
        description.value.trim() === "" ||
        amount.value.trim() === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    const transaction = {

        id: Date.now(),

        description: description.value,

        amount: Number(amount.value),

        type: type.value

    };

    transactions.push(transaction);

    saveTransactions();

    displayTransactions();

    form.reset();

});

// ===============================
// Display Transactions
// ===============================

function displayTransactions() {

    transactionList.innerHTML = "";

    transactions.forEach(function (transaction) {

        const li = document.createElement("li");

        li.classList.add("transaction");

        li.classList.add(transaction.type);

        li.innerHTML = `

            <div>

                <strong>${transaction.description}</strong>

                <br>

                ₹${transaction.amount}

            </div>

            <button
                class="delete-btn"
                onclick="deleteTransaction(${transaction.id})">

                Delete

            </button>

        `;

        transactionList.appendChild(li);

    });

    updateSummary();

}

// ===============================
// Update Balance
// ===============================

function updateSummary() {

    let totalIncome = 0;

    let totalExpense = 0;

    transactions.forEach(function (transaction) {

        if (transaction.type === "income") {

            totalIncome += transaction.amount;

        } else {

            totalExpense += transaction.amount;

        }

    });

    income.textContent = "₹" + totalIncome.toFixed(2);

    expense.textContent = "₹" + totalExpense.toFixed(2);

    balance.textContent =
        "₹" + (totalIncome - totalExpense).toFixed(2);

}

// ===============================
// Delete Transaction
// ===============================

function deleteTransaction(id) {

    transactions = transactions.filter(function (transaction) {
        return transaction.id !== id;
    });

    saveTransactions();

    displayTransactions();

}

// ===============================
// Save Transactions
// ===============================

function saveTransactions() {

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

}

// ===============================
// Load Transactions
// ===============================

displayTransactions();