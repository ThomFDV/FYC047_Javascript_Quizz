'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const User = models.user;

class UserController {

    async addUser(firstname, lasttname, login, mot_de_pass, mail) {
        return User.create({
            firstname,
            lasttname,
            login,
            mot_de_pass,
            mail,
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
