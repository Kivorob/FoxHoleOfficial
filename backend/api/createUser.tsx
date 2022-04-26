import express from "express";
import {Users} from "../models/UsersModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config()

const router = express.Router();

router.post('/', async (req, res) => {
    const {name, telephone, email, password} = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = new Users({name: name, telephone: telephone, email: email, hashedPassword: hashedPassword});
    user.save((err?: any) => {
        if (err) {
            console.log(err);
            res.status(500).send("Ошибка при регистрации, попробуйте позже.")
        } else {
            const secret = process.env.TOKEN_SECRET;
            const payload = {telephone};
            // @ts-ignore
            const token = jwt.sign(payload, secret, {'expiresIn': '12h'});
            res.status(200).json({'token': token, 'user': user});
        }
    });
});

export default router;