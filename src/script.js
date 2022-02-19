const message = `Choose an option:
1- Addition ( + )
2- Subtraction ( - )
3- Multiplication ( * )
4- Division ( / )
5- Remainder ( % )
6- exponentiation ( ** )`

// -------------- Calculator ------------------ //

function cal() {
    
    const operation = prompt(message)

    let a = Number(prompt(`Insert the first number`));
    let b = Number(prompt(`Insert the second number`));
    let result;

// --------------- Math Operations ------------------ //
    addition = () => {
        result = a + b 
        alert(`${a} plus ${b} is ${result}`)
    };
    subtraction = () => {
        result = a - b
        alert(`${a} minus ${b} is ${result}`)
    };
    multiplication = () => {
        result = a * b
        alert(`${a} multiplied by ${b} is ${result}`)
    };
    division = () => {
        result = a / b
        alert(`${a} divided by ${b} is ${result}`)
    };
    remaider = () => {
        result = a % b
        alert(`The remaider of ${a} divided by ${b} is ${result}`)
    };
    exponentiation = () => {
        result = a ** b
        alert(`${a} raised to the ${b}th power is ${result}`)
    };

// ---------------- New Operation ----------------- //

    newOp = () => {
        option = prompt(`Would you like to do another operation?\n1- Yes, I do.\n2- No, I don't.`)

        if(option == 1) {
            cal()
        } else if(option == 2) {
            alert(`Bye bye (:`)
        } else {
            alert(`Put a valid value`)
            newOp()
        }
    }
    newOp()

// --------------- conditionals ----------------- //

    if (operation == 1) {
        addition();
    } else if (operation == 2) {
        subtraction();
    } else if (operation == 3) {
        multiplication();
    } else if (operation == 4) {
        division();
    } else if (operation == 5) {
        remaider();
    } else if (operation == 6) {
        exponentiation();
    }
    
    return prompt
}

cal()