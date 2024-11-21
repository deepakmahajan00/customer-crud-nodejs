// imports
const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./src/routers/customerRoutes');

// app config
const app = express();
app.use(bodyParser.json());


// api
app.use('/customers', customerRoutes)

const PORT = 3002
app.listen(PORT, () => {
    console.log(`Service running on http://localhost:${PORT}`);
});