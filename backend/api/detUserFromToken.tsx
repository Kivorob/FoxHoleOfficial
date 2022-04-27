import express from "express";
import {Users} from "../models/UsersModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

const router = express.Router();

router.post('/', (req: Request, res: any) => {
    // @ts-ignore
    const {token} = req.body;
    // @ts-ignore
    let user = jwt.verify(token, process.env.TOKEN_SECRET);
    const telephone = user.telephone;
    if (user) {
        Users.findOne({telephone: telephone}, async (err?: any, user?: any) => {
            if (err) {
                res.status(500).send('Ошибка сервера.');
            } else if (!user) {
                res.status(400).send('Пользователь не найден.');
            } else {
                res.status(200).send({user: user})
            }
        })
    }
})

export default router;