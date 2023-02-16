const express = require('express');

require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server in running on port ', port)
});

const jwt = require('jsonwebtoken');

const f = async () => {
    const token = jwt.sign({ _id: '123456' }, 'thisismynewtoken', { expiresIn: '0 seconds' });
    console.log(token);

    const data = jwt.verify(token, 'thisismynewtoken');
    console.log(data);
};

f();
