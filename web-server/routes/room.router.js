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
        const room = await RoomController.addRoom(req.body.name, req.body.userId, req.body.testId);
        return res.status(201).json(room).end();
    } catch (e) {
        res.status(409).json(e).end();
    }
});

router.post('/:uuid', async (req, res) => {
    try {
        await RoomController.connectPlayerToRoom(req.params.uuid, req.body.name);
        return res.status(200).send();
    } catch (e) {
        console.log(`Error performing a POST on '/room/:uuid': ${e}`);
        res.status(409).json(e).end();
    }
});

module.exports = router;
