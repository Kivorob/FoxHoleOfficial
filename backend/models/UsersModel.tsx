import mongoose from "mongoose"

const Schema = mongoose.Schema;

const UsersSchema = new Schema ({
    login: {type: String, unique: true},
    name: String,
    hashedPassword: String,
    telephone: {type: String, unique: true},
    email: {type: String, unique: true},
    favorites: [],
    basket: [],
    avatar: {type: String, default: "../../src/img/DefaultUserIcon.png"},
    regDate: {type: Date, default: Date.now}
})

export const Users = mongoose.model('users', UsersSchema);