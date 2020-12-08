'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const UserTests = models.usertests;

class UserTestsController {

    async addUserTests(result, Personne_id, Test_id) {
        return UserTests.create({
            result,
            Personne_id,
            Test_id
        });
    }

    async getUserTests(id) {
        return UserTests.findOne({
            where: {
                id: id
            }
        });
    }

    async updateUserTests(updates, id){
        try{
            return UserTests.update(
                updates, {
                    where: {
                        id: id
                    }
                });
        }catch(err){
            console.log(err);
        }
    }

    async deleteUserTests(id) {
        UserTests.destroy({
            where: {id: id}
        })
    }
}
module.exports = new UserTestsController();
