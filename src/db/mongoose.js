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
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
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

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// const me = new User({ 
//     name: '  mesi  ', 
//     email: 'eSi@Gmail.Com  ',
//     password: 'phone098!'
//  });

// me.save()
//     .then((me) => console.log('success', me))
//     .catch(error => console.log('error', error));



const task = new Task({ description: '    Learn the Mongoose library       ' });

task.save()
    .then(() => console.log('success', task))
    .catch(error => console.log('error', error));

