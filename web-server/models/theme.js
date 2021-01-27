module.exports = (sequelize, DataTypes) => {
    const Theme = sequelize.define('theme', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(300),
            allowNull: false
        }
    }, {
        tableName: 'theme'
    });

    Theme.associate = (models) => {
        Theme.hasMany(models.test, {
            foreignKey: 'themeId'
        });
    };
    return Theme;
}
