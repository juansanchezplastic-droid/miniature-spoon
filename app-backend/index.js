const express = require('express');
const createTransaction = require('./transactions/createTransaction');

const app = express();
const PORT = 3001;

app.post('/transactions', createTransaction)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
