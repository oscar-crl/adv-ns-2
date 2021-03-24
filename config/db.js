const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb://mongo:27017/adv_ns_2_db", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        keepAlive: true
    }).then(() => {
        console.log("Successfully connect to MongoDB.");
    })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });
};

module.exports = connectDB;