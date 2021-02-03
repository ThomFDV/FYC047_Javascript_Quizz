const { Strategy, ExtractJwt } = require('passport-jwt');
const models = require('../models');

const Users = models.user;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

// create jwt strategy
module.exports = passport => {
    passport.use(
        new Strategy(opts, (jwt_payload, done) => {
            Users.findAll({ where: { id: jwt_payload.id } })
                .then(user => {
                    if (user.length) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
};
