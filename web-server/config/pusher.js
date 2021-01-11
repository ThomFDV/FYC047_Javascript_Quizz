const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1127508",
    key: "18a55f14dc5416afff3d",
    secret: "c5ccf143715db076a0da",
    cluster: "eu",
    useTLS: true
});

module.exports = pusher;
