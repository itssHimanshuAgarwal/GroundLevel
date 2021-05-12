const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')
const {
    connectDB
} = require('./config/db.js');

const userRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');


dotenv.config()

connectDB();
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH,PUT,DELETE');
    next();
});
app.use('/api/contact', contactRoutes);
app.use('/api/users', userRoutes);


app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running on port ${PORT}`.yellow.bold
    )
)