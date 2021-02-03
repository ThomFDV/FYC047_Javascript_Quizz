'use strict';

const models = require('../models');
const User = models.user;
const jwt = require('jsonwebtoken');

class UserController {

    async login(username, password) {
        if (!username || !password) return;
        let user = await User.findOne({ where: { username } });
        if (!user) {
            throw { msg: 'No such user found', user };
        }
        if (user.password === password) {
            let payload = { id: user.id };
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            return { user, token }
        } else {
            throw { msg: 'Password is incorrect' };
        }
    }

    addUser(firstname, lastname, username, password, email, isPlaying) {
        return User.create({
            firstname,
            lastname,
            username,
            password,
            email,
            isPlaying
        });
    }

    async getUser(id) {
        return User.findOne({
            where: {
                id: id
            }
        });
    }

    async getUserByMail(mail){
        return User.findOne({
            where:{
                mail: mail
            }
        });
    }

    async updateUser(updates, id){
        try{
            return User.update(
                updates, {
                    where: {
                        id: id
                    }
                });
        }catch(err){
            console.log(err);
        }
    }

    async deleteUser(id) {
        User.destroy({
            where: {id: id}
        })
    }
}
module.exports = new UserController();
