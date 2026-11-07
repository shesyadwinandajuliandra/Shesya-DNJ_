console.log("Welcome to Shesya.Port!");


const currentYear = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${currentYear} Shesya Dwi Nanda Juliandra. All Rights Reserved.`;
}

// MODULO CALCULATOR
const moduloA = document.getElementById("modulo-a");
const moduloB = document.getElementById("modulo-b");
const moduloButton = document.getElementById("modulo-button");
const moduloResult = document.getElementById("modulo-result");

moduloButton.addEventListener("click", function() {

    const a = Number(moduloA.value);
    const b = Number(moduloB.value);

    // INPUT VALIDATION
    if (
        moduloA.value === "" ||
        moduloB.value === "" ||
        !Number.isSafeInteger(a) ||
        !Number.isSafeInteger(b) ||
        b <= 0
    ) {
        moduloResult.innerHTML = `
            <h3>Invalid Input</h3>
            <p>Please enter valid integers.
            The second number must be greater than zero.</p>
        `;
        return;
    }

    // MATHEMATICAL CALCULATION
    const quotient = Math.floor(a / b);
    const multiplication = b * quotient;
    const remainder = a - multiplication;

    // DISPLAY CALCULATION STEPS
    moduloResult.innerHTML = `

        <h3>Calculation Result</h3>

        <div class="modulo-final-answer">
            <span>FINAL ANSWER</span>
            <h2>${a} mod ${b} = ${remainder}</h2>
            <p>The remainder of the division is ${remainder}.</p>
        </div>

        <h3 class="modulo-steps-title">
            Step-by-Step Solution
        </h3>

        <div class="modulo-step">
            <span>STEP 01</span>
            <h4>Division</h4>
            <div class="math-operation">
                ${a} ÷ ${b} = ${quotient}
            </div>
            <p>
                Divide ${a} by ${b}.
                The quotient is ${quotient}.
            </p>
        </div>

        <div class="modulo-step">
            <span>STEP 02</span>
            <h4>Multiplication</h4>
            <div class="math-operation">
                ${quotient} × ${b} = ${multiplication}
            </div>
            <p>
                Multiply the quotient (${quotient})
                by the divisor (${b}).
                The result is ${multiplication}.
            </p>
        </div>

        <div class="modulo-step">
            <span>STEP 03</span>
            <h4>Subtraction</h4>
            <div class="math-operation">
                ${a} − ${multiplication} = ${remainder}
            </div>
            <p>
                Subtract ${multiplication} from ${a}
                to find the remainder.
            </p>
        </div>

        <div class="modulo-verification">
            <h4>Mathematical Verification</h4>
            <div class="math-operation">
                ${a} = (${b} × ${quotient}) + ${remainder}
            </div>
            <p>
                The original number equals the divisor
                multiplied by the quotient, plus the remainder.
                This verifies the calculation.
            </p>
        </div>

        <div class="modulo-conclusion">
            <h4>Conclusion</h4>
            <p>
                Since the remainder is ${remainder},
                the result of ${a} mod ${b} is ${remainder}.
            </p>
        </div>

    `;

});


// CONGRUENCE CHECKER

const congruenceA = document.getElementById("congruence-a");
const congruenceB = document.getElementById("congruence-b");
const congruenceN = document.getElementById("congruence-n");

const congruenceButton = document.getElementById("congruence-button");
const congruenceResult = document.getElementById("congruence-result");

congruenceButton.addEventListener("click", function() {

    const a = Number(congruenceA.value);
    const b = Number(congruenceB.value);
    const n = Number(congruenceN.value);

    // INPUT VALIDATION
    if (
        congruenceA.value === "" ||
        congruenceB.value === "" ||
        congruenceN.value === "" ||
        !Number.isSafeInteger(a) ||
        !Number.isSafeInteger(b) ||
        !Number.isSafeInteger(n) ||
        n <= 0
    ) {
        congruenceResult.innerHTML = `
            <h3>Invalid Input</h3>
            <p>
                Please enter valid integers.
                The modulus must be greater than zero.
            </p>
        `;
        return;
    }

    // MATHEMATICAL CALCULATION
    const remainderA = ((a % n) + n) % n;
    const remainderB = ((b % n) + n) % n;

    const difference = a - b;
    const differenceRemainder = ((difference % n) + n) % n;

    const isCongruent = remainderA === remainderB;

    // RESULT STATUS
    const status = isCongruent
        ? "CONGRUENT"
        : "NOT CONGRUENT";

    const explanation = isCongruent
        ? "Both numbers have the same remainder."
        : "Both numbers have different remainders.";

    // DISPLAY RESULT
    congruenceResult.innerHTML = `

        <h3>Calculation Result</h3>

        <div class="congruence-final-answer">
            <span>FINAL ANSWER</span>
            <h2>${a} ≡ ${b} (mod ${n})</h2>
            <p>${status}</p>
            <p>${explanation}</p>
        </div>

        <h3 class="congruence-steps-title">
            Step-by-Step Solution
        </h3>

        <div class="congruence-step">
            <span>STEP 01</span>
            <h4>Calculate the First Remainder</h4>

            <div class="math-operation">
                ${a} mod ${n} = ${remainderA}
            </div>

            <p>
                Divide ${a} by ${n}.
                The remainder is ${remainderA}.
            </p>
        </div>

        <div class="congruence-step">
            <span>STEP 02</span>
            <h4>Calculate the Second Remainder</h4>

            <div class="math-operation">
                ${b} mod ${n} = ${remainderB}
            </div>

            <p>
                Divide ${b} by ${n}.
                The remainder is ${remainderB}.
            </p>
        </div>

        <div class="congruence-step">
            <span>STEP 03</span>
            <h4>Compare Both Remainders</h4>

            <div class="math-operation">
                ${remainderA} ${isCongruent ? "=" : "≠"} ${remainderB}
            </div>

            <p>
                ${isCongruent
                    ? "The remainders are equal, so the two numbers are congruent."
                    : "The remainders are different, so the two numbers are not congruent."
                }
            </p>
        </div>

        <div class="congruence-comparison">
            <h4>Mathematical Verification</h4>

            <div class="math-operation">
                ${a} − ${b} = ${difference}
            </div>

            <div class="math-operation">
                ${difference} mod ${n} = ${differenceRemainder}
            </div>

            <p>
                Two integers are congruent modulo ${n}
                when their difference is divisible by ${n}.
                ${isCongruent
                    ? `Since the remainder is 0, the difference is divisible by ${n}.`
                    : `Since the remainder is ${differenceRemainder}, the difference is not divisible by ${n}.`
                }
            </p>
        </div>

        <div class="congruence-conclusion">
            <h4>Conclusion</h4>

            <p>
                ${a} and ${b}
                ${isCongruent ? "are" : "are not"}
                congruent modulo ${n} because
                their remainders are
                ${isCongruent ? "equal" : "different"}.
            </p>
        </div>

    `;

});

// NUMBER SYSTEM CALCULATOR

const numberInput = document.getElementById("number-input");
const fromBase = document.getElementById("from-base");

const convertButton = document.getElementById("convert-button");
const numberResult = document.getElementById("number-result");

convertButton.addEventListener("click", function() {

    const input = numberInput.value.trim();
    const sourceBase = Number(fromBase.value);

    const validDigits = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9a-fA-F]+$/
    };

    if (input === "") {
        numberResult.textContent = "Please enter a number first.";
        return;
    }

    if (!validDigits[sourceBase].test(input)) {
        numberResult.textContent =
            "Invalid number for the selected number system.";
        return;
    }

    const decimalValue = parseInt(input, sourceBase);

    if (!Number.isSafeInteger(decimalValue)) {
        numberResult.textContent =
            "Number is too large. Please enter a smaller number.";
        return;
    }

    const binary = decimalValue.toString(2);
    const decimal = decimalValue.toString(10);
    const octal = decimalValue.toString(8);
    const hexadecimal = decimalValue.toString(16).toUpperCase();

    numberResult.innerHTML = `
        <h3>Conversion Results</h3>

        <div class="number-output">

            <div class="output-item">
                <span>Binary (Base 2)</span>
                <strong>${binary}</strong>
            </div>

            <div class="output-item">
                <span>Decimal (Base 10)</span>
                <strong>${decimal}</strong>
            </div>

            <div class="output-item">
                <span>Octal (Base 8)</span>
                <strong>${octal}</strong>
            </div>

            <div class="output-item">
                <span>Hexadecimal (Base 16)</span>
                <strong>${hexadecimal}</strong>
            </div>

        </div>
    `;

});


// COMBINATORICS CALCULATOR

const calculationType = document.getElementById("combination-type");
const combinationN = document.getElementById("combination-n");
const combinationR = document.getElementById("combination-r");
const combinatoricsButton = document.getElementById("combinatorics-button");
const combinatoricsResult = document.getElementById("combinatorics-result");

// Function to calculate factorial
function factorial(number) {
    let result = 1n;

    for (let i = 1; i <= number; i++) {
        result = result * BigInt(i);
    }

    return result;
}

// Button event
combinatoricsButton.addEventListener("click", function() {

    const n = Number(combinationN.value);
    const r = Number(combinationR.value);
    const type = calculationType.value;

    // Input validation
    if (
        combinationN.value === "" ||
        combinationR.value === "" ||
        !Number.isSafeInteger(n) ||
        !Number.isSafeInteger(r) ||
        n < 0 ||
        r < 0 ||
        r > n ||
        n > 1000
    ) {
        combinatoricsResult.textContent =
            "Please enter valid integers. Make sure 0 ≤ r ≤ n and n is not greater than 1000.";
        return;
    }

    let result;
    let formula;

    const numerator = factorial(n);

    if (type === "permutation") {

        const denominator = factorial(n - r);

        result = numerator / denominator;

        formula = `P(${n}, ${r}) = ${n}! / (${n} - ${r})!`;

    } else {

        const denominator = factorial(r) * factorial(n - r);

        result = numerator / denominator;

        formula = `C(${n}, ${r}) = ${n}! / (${r}! × (${n} - ${r})!)`;

    }

    // Display result
    combinatoricsResult.innerHTML = `
        <h3>Calculation Result</h3>
        <p><strong>${type === "permutation" ? "Permutation" : "Combination"}</strong></p>
        <p>${formula}</p>
        <p>Result:</p>
        <strong>${result.toString()}</strong>
    `;

});
