const mongoose = require('mongoose');

exports.connectDB = async() => {
    try {
        var url = `mongodb+srv://user12:bdognom12hrsa@cluster0.638y8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}