'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const Answer = models.answer;

class AnswerController {

    async addAnswer(content) {
        return Answer.create({
            content
        });
    }

    async getAnswer(id) {
        return Answer.findOne({
            where: {
                id: id
            }
        });
    }

    async updateAnswer(updates, id){
        try{
            return Answer.update(
                updates, {
                    where: {
                        id: id
                    }
                });
        }catch(err){
            console.log(err);
        }
    }

    async deleteAnswer(id) {
        Answer.destroy({
            where: {id: id}
        })
    }
}
module.exports = new AnswerController();
