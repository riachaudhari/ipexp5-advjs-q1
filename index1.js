function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        // Validate that inputs are numbers
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject('Both inputs must be numbers.');
            return;
        }

        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject('Error: Division by zero.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Error: Invalid operation. Please use +, -, *, or /.');
        }
    });
}
undefined
calculate(20, 25, '+')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error)); //output: 45

calculate(41, 0, '/')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));  //error: Division by zero

calculate(40, 5, '%')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error)); // error: Invalid operation

calculate(8, 2, '*')
    .then(result => console.log('Result', result))
    .catch(error => console.log('Error', error)); //output: 16
