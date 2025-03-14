const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const signupRoutes = require('./signup');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(signupRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
