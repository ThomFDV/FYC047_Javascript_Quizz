'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const Question = models.question;
const Test = models.test

class QuestionController {

    async addQuestion(content, imagePath, testId) {
        const testFound = await Test.findByPk(testId);
        if (!testFound) {
            console.log("Test not found!");
            return null;
        }
        const createdQuestion = await Question.create({
            content,
            imagePath
        });
        if (!createdQuestion) {
            console.log("Question not found!");
            return null;
        }
        return testFound.addQuestion(createdQuestion);
    }

    async getQuestion(id) {
        return Question.findOne({
            where: {
                id: id
            }
        });
    }

    async updateQuestion(updates, id){
        try{
            return Question.update(
                updates, {
                    where: {
                        id: id
                    }
                });
        }catch(err){
            console.log(err);
        }
    }

    async deleteQuestion(id) {
        Question.destroy({
            where: {id: id}
        })
    }
}
module.exports = new QuestionController();
