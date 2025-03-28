const express = require('express');

const app = express();
const port = 3000;


const calculate = (num1, num2, operation) => {
    switch (operation) {
        case 'add': return num1 + num2;
        case 'subtract': return num1 - num2;
        case 'multiply': return num1 * num2;
        case 'divide':
            if (num2 === 0) throw new Error('Division by zero is not allowed');
            return num1 / num2;
        case 'sqrt':
            if (num1 < 0) throw new Error('Cannot take the square root of a negative number');
            return Math.sqrt(num1);
        case 'mod':
            if (num2 === 0) throw new Error('Modulo by zero is not allowed');
            return num1 % num2;
        default:
            throw new Error('Invalid operation');
    }
};


const handleCalculation = (req, res, operation) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if (isNaN(num1)) {
            return res.status(400).json({ error: 'num1 must be a number' });
        }

        if (operation !== 'sqrt' && isNaN(num2)) {
            return res.status(400).json({ error: 'num2 must be a number for this operation' });
        }

        const result = calculate(num1, num2, operation);
        res.json({ result });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


app.get('/add', (req, res) => handleCalculation(req, res, 'add'));
app.get('/subtract', (req, res) => handleCalculation(req, res, 'subtract'));
app.get('/multiply', (req, res) => handleCalculation(req, res, 'multiply'));
app.get('/divide', (req, res) => handleCalculation(req, res, 'divide'));
app.get('/sqrt', (req, res) => handleCalculation(req, res, 'sqrt'));
app.get('/mod', (req, res) => handleCalculation(req, res, 'mod'));


app.listen(port, () => {
    console.log(`Calculator service running on http://localhost:${port}`);
});
