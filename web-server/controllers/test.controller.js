'use strict';

const Test = require('../models').test;

class TestController {

    async addTest(name, nbQuestion, themeId) {
        return Test.create({
            name,
            nbQuestion,
            themeId
        });
    }

    async getTest(id) {
        return Test.findByPk(id);
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
