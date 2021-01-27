require('dotenv').config();
const express = require('express');
const models = require('./models');
const RouteBuilder = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
// const pusher = require('./config/pusher');

const app = express();

const corsOptions = {
    origin: 'http://localhost:8100',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(passport.initialize({}));

require('./config/passport')(passport);

RouteBuilder.build(app);

// pusher.connect();

const PORT = process.env.PORT || 3000;
models.sequelize.authenticate().then(() => {
    return models.sequelize.sync();
});

models.sequelize.authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listen on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// const server = require('http').Server(app)
// const io = require('socket.io')(server);
//
// io.on('connection', socket => {
//     console.log('connect');
// });

