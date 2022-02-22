// -------------- Prompt message -------------------- //

const message = `Choose a number:
1- Addition ( + )
2- Subtraction ( - )
3- Multiplication ( * )
4- Division ( / )
5- Remainder ( % )
6- Exponentiation ( ** )`

// --------------- Math Operations ------------------ //

const addition = (a, b) => {
    result = a + b;
    alert(`${a} plus ${b} is ${result}`);
    };

const subtraction = (a, b) => {
    result = a - b
    alert(`${a} minus ${b} is ${result}`);
    };

const multiplication = (a, b) => {
    result = a * b;
    alert(`${a} multiplied by ${b} is ${result}`);
    };

const division = (a, b) => {
    result = a / b;
    alert(`${a} divided by ${b} is ${result}`);
    };

const remaider = (a, b) => {
    result = a % b;
    alert(`The remaider of ${a} divided by ${b} is ${result}`);
    };

const exponentiation = (a, b) => {
    result = a ** b;
    alert(`${a} raised to the ${b}th power is ${result}`);
};

// ---------------- New Operation ----------------- //
    
const newOp = () => {
    option = prompt(`Would you like to do another operation?\n1- Yes, I do.\n2- No, I don't.`);
    
    if(option == 1) {
        cal();
    } else if(option == 2) {
        alert(`Bye bye (:`);
    } else {
        alert(`Put a valid value`);
        newOp();
    }
}
    
// -------------- Calculator ------------------ //

const cal = () => {
    const operation = prompt(message);
    if (isNaN(operation) || operation >= 7 || operation <= 0) {
        alert(`Error - Put a valid option.`);
        cal();
    } else {
        let a = Number(prompt(`Insert the first number`));
        let b = Number(prompt(`Insert the second number`));
    
        if (isNaN(a) && isNaN(b)) {
            alert(`Error - Put a number`);
            newOp();
        } else {
    
// --------------- Conditional's operation ----------------- //
    
    if (operation == 1) {
        addition(a, b);
        newOp();
    } else if (operation == 2) {
        subtraction(a, b);
        newOp();
    } else if (operation == 3) {
        multiplication(a, b);
        newOp();
    } else if (operation == 4) {
        division(a, b);
        newOp();
    } else if (operation == 5) {
        remaider(a, b);
        newOp();
    } else if (operation == 6) {
        exponentiation(a, b);
        newOp();
    }
   }
  }
}

cal() 