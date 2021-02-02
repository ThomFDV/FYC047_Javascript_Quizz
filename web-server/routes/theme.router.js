const express = require('express');
const bodyParser = require('body-parser');
const ThemeController = require('../controllers').ThemeController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await ThemeController.addTheme(req.body.name);
        return res.status(201).json(p).end();
    } catch(err) {
        res.status(400).json({ err, body: req.body }).end();
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await ThemeController.getAllThemesAndTests();
        return res.status(200).json(result).end();
    } catch (err) {
        return res.status(400).json({ err, body: req.body }).end();
    }
});

module.exports = router;
