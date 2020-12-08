'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const Question = models.questions;

class QuestionController {

    async addQuestion(content, imagePath, Theme_id, Proposition_id1, Proposition_id2, Proposition_id3, Answer_id) {
        return Question.create({
            content,
            imagePath,
            Theme_id,
            Proposition_id1,
            Proposition_id2,
            Proposition_id3,
            Answer_id
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
