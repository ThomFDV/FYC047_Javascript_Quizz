'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const AnswerController = require('../controllers').AnswerController;


const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await AnswerController.addAnswer(req.body.content, req.body.isCorrect, req.body.questionId);
        return res.status(201).json(p).end();
    } catch(err) {
        res.status(400).json({ err, body: req.body }).end();
    }
});

router.get('/:id', async (req, res) => {
    try{
        const p = await AnswerController.getAnswer(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.put('/update/', async (req, res) => {
    try{
        const p = await AnswerController.updateAnswer(req.body.updates, req.body.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const p = await AnswerController.deleteAnswer(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

module.exports = router;
