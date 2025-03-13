const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/add', (req, res) => 
{
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);
    const result = a + b;

    res.send({ operation: 'add', a, b, result });
});

app.post('/subtract', (req, res) => 
{
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);
    const result = a - b;

    res.send({ operation: 'subtract', a, b, result });
});

app.post('/multiply', (req, res) => 
{
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);
    const result = a * b;

    res.send({ operation: 'multiply', a, b, result });
});

app.post('/divide', (req, res) => 
{
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    if (b === 0) 
    {
        return res.status(400).send({ error: 'Cannot divide by zero' });
    }

    const result = a / b;

    res.send({ operation: 'divide', a, b, result });
});

app.listen(port, () => 
{
    console.log(`Server is running on http://localhost:${port}`);
});
