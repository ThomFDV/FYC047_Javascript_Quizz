'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const TestController = require('../controllers').TestController;


const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await TestController.addTest(req.body.name, req.body.nbQuestion, req.body.themeId);
        return res.status(201).json(p).end();
    } catch(err) {
        res.status(400).json({ err, body: req.body }).end();
    }
});


router.get('/:id', async (req, res) => {
    try{
        const p = await TestController.getTest(req.params.id);
        return res.status(200).json(p).end();
    } catch(err) {
        res.status(409).json({ err, body: req.body }).end();
    }
});

router.put('/update/', async (req, res) => {
    try{
        const p = await TestController.updateTest(req.body.updates, req.body.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const p = await TestController.deleteTest(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

module.exports = router;
