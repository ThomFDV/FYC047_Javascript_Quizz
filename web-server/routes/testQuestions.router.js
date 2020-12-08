'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const TestQuestionsController = require('../controllers').TestQuestionsController;


const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await TestQuestionsController.addTestQuestions(req.body.Test_id, req.body.Question_id);
        return res.json(p).status(201).end();
    } catch(err) {
        res.status(400).end();
    }
});

router.get('/:id', async (req, res) => {
    try{
        const p = await TestQuestionsController.getTestQuestions(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.put('/update/', async (req, res) => {
    try{
        const p = await TestQuestionsController.updateTestQuestions(req.body.updates, req.body.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const p = await TestQuestionsController.deleteTestQuestions(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

module.exports = router;
