'use strict';

const models = require('../models');
const Theme = models.theme;

class ThemeController {

    async addTheme(name) {
        return Theme.create({
            name
        });
    };

    getAllThemesAndTests() {
        return Theme.findAll({
            include: [
                {
                    model: models.test
                }
            ]
        })
    }
}

module.exports = new ThemeController();
