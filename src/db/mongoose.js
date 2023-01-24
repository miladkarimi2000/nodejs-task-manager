const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const db = mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', { name: String, age: Number });

const me = new User({ name: 'esi', age: '37' });

me.save()
    .then((me) => console.log('success', me))
    .catch(error => console.log('error', error));

