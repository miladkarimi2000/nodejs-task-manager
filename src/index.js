const express = require('express');

require('./db/mongoose');
const User = require('./models/user');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.listen(port, () => {
    console.log('Server in running on port ', port)
});

