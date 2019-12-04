const mongoose = require('mongoose');
const mongDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connect error'));