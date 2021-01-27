module.exports = (sequelize, Datatypes) => {
    const UserRoom = sequelize.define('user_room', {
        score: {
            type: Datatypes.INTEGER(11),
            allowNull: false
        }
    });

    return UserRoom;
};
