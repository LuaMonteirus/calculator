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
    return a + b;
    };

const subtraction = (a, b) => {
    return a - b
    };

const multiplication = (a, b) => {
    return a * b;
    };

const division = (a, b) => {
    return a / b;
    };

const remaider = (a, b) => {
    return a % b;
    };

const exponentiation = (a, b) => {
    return a ** b;
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
    const operation = Number(prompt(message));
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

    switch (operation) {
        case 1:
            addition(a, b)
            alert(`${a} plus ${b} is ${addition(a, b)}`);
            break;
        case 2:
            subtraction(a, b)
            alert(`${a} minus ${b} is ${subtraction(a, b)}`);
            break;
        case 3: 
            multiplication (a, b)
            alert(`${a} multiplied by ${b} is ${multiplication(a, b)}`);
            break;
        case 4:
            division (a, b)
            alert(`${a} divided by ${b} is ${division(a, b)}`);
            break;
        case 5: 
            remaider (a, b)
            alert(`The remaider of ${a} divided by ${b} is ${remaider(a, b)}`);
            break;
        case 6:
            exponentiation (a, b)
            alert(`${a} raised to the ${b}th power is ${exponentiation(a, b)}`);
            break;
        default:
            alert('a')
        }
    newOp()
   }
  }
}

cal()