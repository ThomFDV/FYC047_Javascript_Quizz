'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const Test = models.test;

class TestController {

    async addTest(name, nbQuestion) {
        return Test.create({
            name,
            nbQuestion
        });
    }

    async getTest(id) {
        return Test.findOne({
            where: {
                id: id
            }
        });
    }

    async updateTest(updates, id){
        try{
            return Test.update(
                updates, {
                    where: {
                        id: id
                    }
                });
        }catch(err){
            console.log(err);
        }
    }

    async deleteTest(id) {
        Test.destroy({
            where: {id: id}
        })
    }
}
module.exports = new TestController();
