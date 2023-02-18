const express = require('express');

require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const port = process.env.PORT || 3000;

const app = express();

// app.use(express.json());
// app.use(userRouter);
// app.use(taskRouter);



const User = require('./models/user');
const Task = require('./models/task');

app.get('/test', async (req, res) => {

    // const task = await Task.findById('63f08bd4c636ff6d943d961c');
    // await task.populate('owner');
    // res.send(task);

    const user = await User.findById('63f0815327cf25c1823999d2');
    await user.populate('tasks');
    console.log(user);
    res.send(user.tasks);
});

app.listen(port, () => {
    console.log('Server in running on port ', port)
});