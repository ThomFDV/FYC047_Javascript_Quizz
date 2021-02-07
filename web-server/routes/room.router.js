const express = require('express');
const bodyParser = require('body-parser');
const RoomController = require('../controllers').RoomController;

const router = express.Router();
router.use(bodyParser.json());

router.get('/:uuid', async (req, res) => {
    try {
        const room = await RoomController.getRoom(req.params.uuid);
        return res.status(200).json(room).end();
    } catch (e) {
        console.log(`Error performing a GET on '/room/:uuid': ${e}`);
        res.status(409).json(e).end();
    }
});

router.get('/', async (req, res) => {
    try {
        const rooms = await RoomController.getRooms();
        return res.status(200).json(rooms).end();
    } catch (e) {
        console.log(`Error performing a GET on '/room/': ${e}`);
        res.status(409).json(e).end();
    }
});

router.post('/', async (req, res) => {
    try {
        const room = await RoomController.addRoom(req.body.name, req.body.username, req.body.testId);
        return res.status(201).json(room).end();
    } catch (e) {
        res.status(409).json(e).end();
    }
});

router.post('/join/:uuid', async (req, res) => {
    try {
        const room = await RoomController.connectPlayerToRoom(req.params.uuid, req.body.username);
        return res.status(200).json(room).end();
    } catch (e) {
        console.log(`Error performing a POST on '/room/:uuid': ${e}`);
        res.status(409).json(e).end();
    }
});

router.post('/close/:uuid', async (req, res) => {
    try {
        const room = await RoomController.closeRoom(req.params.uuid, req.body.username, req.body.score);
        return res.status(200).json(room).end();
    } catch (e) {
        console.log(`Error performing a POST on '/room/close/:uuid': ${e}`);
        res.status(409).json(e).end();
    }
});

module.exports = router;
