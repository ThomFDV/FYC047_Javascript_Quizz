'use strict';

const models = require('../models');
const User = models.user;

class UserController {

    async addUser(firstname, lastname, username, password, email, isPlaying) {
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
