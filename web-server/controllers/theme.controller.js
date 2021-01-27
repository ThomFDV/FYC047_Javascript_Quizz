'use strict';

const models = require('../models');
const Theme = models.theme;

class ThemeController {

    async addTheme(name) {
        return Theme.create({
            name
        });
    };
}

module.exports = new ThemeController();
