const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/online-pc-shop', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(err.message);
    process.exit(1);
    }
};

module.exports = connectDB;