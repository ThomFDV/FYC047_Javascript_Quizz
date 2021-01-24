'use strict';

class RouterBuilder {
    build(app) {
        app.use('/user', require('./user.router'));
        app.use('/question', require('./question.router'));
        app.use('/answer', require('./answer.router'));
        app.use('/test', require('./test.router'));
        app.use('/room', require('./room.router'));
    }
}

module.exports = new RouterBuilder();
