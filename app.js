import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

// routes
import * as subscribers from './routes/subscribers.js';

const app = express();

// parse the incoming reques body to json
app.use(express.json);


// db connection
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error);
});
db.once('success', () => {
    console.log('connected to database');
});





//port
app.listen(3000, () => {
    console.log('sever started');
});
