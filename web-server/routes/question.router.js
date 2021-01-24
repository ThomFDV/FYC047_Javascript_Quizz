'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const QuestionController = require('../controllers').QuestionController;


const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await QuestionController.addQuestion(req.body.content, req.body.imagePath, req.body.testId);
        return res.json(p).status(201).end();
    } catch(err) {
        res.status(400).json({ err, val: req.body }).end();
    }
});

router.get('/:id', async (req, res) => {
    try{
        const p = await QuestionController.getQuestion(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.put('/update/', async (req, res) => {
    try{
        const p = await QuestionController.updateQuestion(req.body.updates, req.body.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const p = await QuestionController.deleteQuestion(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

module.exports = router;
