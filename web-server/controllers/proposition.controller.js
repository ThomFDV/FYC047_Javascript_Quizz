'use strict';

const models = require('../models');
const sequelize = models.sequelize;
const Proposition = models.proposition;

class PropositionController {

    async addProposition(content) {
        return Proposition.create({
            content
        });
    }

    async getProposition(id) {
        return Proposition.findOne({
            where: {
                id: id
            }
        });
    }

    async updateProposition(updates, id){
        try{
            return Proposition.update(
                updates, {
                    where: {
                        id: id
                    }
                });
        }catch(err){
            console.log(err);
        }
    }

    async deleteProposition(id) {
        Proposition.destroy({
            where: {id: id}
        })
    }
}
module.exports = new PropositionController();
