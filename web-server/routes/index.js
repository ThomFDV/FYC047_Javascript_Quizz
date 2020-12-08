'use strict';

class RouterBuilder {
    build(app) {
        app.use('/user', require('./user.router'));
        app.use('/usertests', require('./userTests.router'));
        app.use('/proposition', require('./proposition.router'));
        app.use('/question', require('./question.router'));
        app.use('/answer', require('./answer.router'));
        app.use('/testquestions', require('./testQuestions.router'));
        app.use('/test', require('./test.router'));
    }
}

module.exports = new RouterBuilder();
