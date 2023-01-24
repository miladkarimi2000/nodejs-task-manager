const mongoose = require('mongoose');
const validator = require('validator');

mongoose.set('strictQuery', false);

const db = mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,      
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    }
});

const me = new User({ name: '  mesi  ', email: 'eSi@Gmail.Com  ' });

me.save()
    .then((me) => console.log('success', me))
    .catch(error => console.log('error', error));

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// });

// const task = new Task({ description: 'Learn the Mongoose library', completed: false });

// task.save()
//     .then(() => console.log('success', task))
//     .catch(error => console.log('error', error));

