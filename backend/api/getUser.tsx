import express from "express";
import {Users} from "../models/UsersModel";

const router = express.Router();

router.get('/', (req, res) => {
    Users.find({}, (err?: any, user?: any) => {
        if (err) {
            res.status(400).json({"success": false, "message": "Нет пользователей."})
        } else {
            res.status(200).json({"success": true, "message": "Список пользователей:", "User": user})
        }
    })
});

router.get('/:telephone' + '', (req, res) => {
    Users.findOne({telephone: req.params.telephone}, (err?: any, user?: any) => {
        if (err) {
            res.status(400).json({"success": false, "message": "Пользователь не найден", "error": err})
        } else {
            res.status(200).json({"success": true, "message": "Пользователь найден", "user": user})
        }
    })
})

export default router

