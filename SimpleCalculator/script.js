// Get the display element
const display = document.getElementById("display");

// Function to add numbers/operators to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        if (display.value === "") {
            display.value = "";
            return;
        }

        // Convert % into division by 100
        let expression = display.value.replace(/%/g, "/100");

        // Evaluate the expression
        let result = eval(expression);

        // Handle invalid results
        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}