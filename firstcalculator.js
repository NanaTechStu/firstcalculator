let history = "";
let result = "";

const historyElement = document.getElementById("history");
const resultElement = document.getElementById("result");

function appendCharacter(char) {
    // Replace 'pi' with Math.PI
    char = char === 'pi' ? Math.PI : char;

    // Replace 'log' with 'Math.log10(' and add closing parenthesis
    if (char === 'log') {
        char = 'Math.log10(';
    } else if (char === 'exp') {
        char = 'Math.exp(';
    }

    result += char;
    resultElement.textContent = result;
}

function clearAll() {
    history = "";
    result = "";
    updateDisplay();
}

function deleteLast() {
    result = result.slice(0, -1);
    resultElement.textContent = result || "0";
}

function calculateResult() {
    try {
        // Close any open parentheses
        result = result.replace(/Math.log10\($/, 'Math.log10())');
        result = result.replace(/Math.exp\($/, 'Math.exp())');
        
        history = result;
        result = eval(result).toString();
        updateDisplay();
    } catch {
        result = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    historyElement.textContent = history;
    resultElement.textContent = result;
}

document.getElementById("light").addEventListener("click", () => {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
});

document.getElementById("dark").addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
});
