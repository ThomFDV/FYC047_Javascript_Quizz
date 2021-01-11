'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('../controllers').UserController;


const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await UserController.addUser(
            req.body.firstname,
            req.body.lastname,
            req.body.username,
            req.body.password,
            req.body.email
        );
        return res.json(p).status(201).end();
    } catch(err) {
        res.status(400).json({
            err,
            "data": [
                req.body.firstname,
                req.body.lastname,
                req.body.username,
                req.body.password,
                req.body.email
            ]
        }).end();
    }
});

router.get('/getone/:id', async (req, res, next) => {
    try{
        const p = await UserController.getUser(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.put('/update/', async (req, res) => {
    try{
        const p = await UserController.updateUser(req.body.updates, req.body.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const p = await UserController.deleteUser(req.params.id);
        return res.json(p).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

module.exports = router;
