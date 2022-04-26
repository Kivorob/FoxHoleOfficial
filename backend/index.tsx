import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import createUser from "./api/createUser";
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = '8000';

const url = process.env.MONGO_URI

// @ts-ignore
mongoose.connect(url).then(res => console.log("Монго стоит"));

app.use('/api/register', createUser);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})