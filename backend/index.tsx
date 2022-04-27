import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import createUser from "./api/createUser";
import loginUser from "./api/loginUser";
import dotenv from 'dotenv';
import getUserFromToken from "./api/detUserFromToken"


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = '8000';

const url = process.env.MONGO_URI

// @ts-ignore
mongoose.connect(url).then(res => console.log("Монго стоит"));

app.use('/api/register', createUser);
app.use('/api/login', loginUser);
app.use('/api/verify', getUserFromToken);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})