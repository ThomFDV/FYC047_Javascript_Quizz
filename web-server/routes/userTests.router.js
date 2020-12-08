'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const UserTestsController = require('../controllers').UserTestsController;


const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await UserTestsController.addUserTests(req.body.result, req.body.Personne_id, req.body.Test_id);
        return res.json(p).status(201).end();
    } catch(err) {
        console.log(err);
        res.status(400).end();
    }
});

router.get('/:id', async (req, res) => {
    try{
        const p = await UserTestsController.getUserTests(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.put('/update/', async (req, res) => {
    try{
        const p = await UserTestsController.updateUserTests(req.body.updates, req.body.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const p = await UserTestsController.deleteUserTests(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

module.exports = router;
