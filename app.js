import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

// middleware imports
import subscribers from './routes/subscribersRoute.js';

const app = express();

// parse the incoming reques body to json
app.use(express.json());

// db connection
mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {console.log('db connected')})
    .catch(err => console.error(err));

// routes
app.use('/subscribers', subscribers);

//port
app.listen(3000, () => {
    console.log('sever started');
});
