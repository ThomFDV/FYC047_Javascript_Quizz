'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const TestQuestions = models.testquestions;

class TestQuestionsController {

    async addTestQuestions(Test_id, Question_id) {
        return TestQuestions.create({
            Test_id,
            Question_id
        });
    }

    async getTestQuestions(id) {
        return TestQuestions.findOne({
            where: {
                id: id
            }
        });
    }

    async updateTestQuestions(updates, id){
        try{
            return TestQuestions.update(
                updates, {
                    where: {
                        id: id
                    }
                });
        }catch(err){
            console.log(err);
        }
    }

    async deleteTestQuestions(id) {
        TestQuestions.destroy({
            where: {id: id}
        })
    }
}
module.exports = new TestQuestionsController();
