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
            req.body.email,
            req.body.isPlaying
        );
        return res.status(201).json(p).end();
    } catch(err) {
        res.status(400).json({ err, body: req.body }).end();
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await UserController.login(req.body.username, req.body.password);
        return res.json(user).status(200).end();
    } catch (e) {
        console.log(`Error performing a POST on '/user/login': ${e}`);
        res.status(409).json(e).end();
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
