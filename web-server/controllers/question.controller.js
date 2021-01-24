'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const Question = models.question;
const Test = models.test

class QuestionController {

    async addQuestion(content, imagePath, testId) {
        return Test.findByPk(testId)
            .then((test) => {
                if (!test) {
                    console.log("Test not found!");
                    return null;
                }
                return Question.create({
                    content,
                    imagePath
                }).then((question) => {
                    if (!question) {
                        console.log("Question not found!");
                        return null;
                    }

                    test.addQuestion(question);
                    console.log(`>> added Question id=${question.id} to Test id=${test.id}`);
                    return test;
                });
            })
            .catch((err) => {
                console.log(">> Error while adding Question to Test: ", err);
            });
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
