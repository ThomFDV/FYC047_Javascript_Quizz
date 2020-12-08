/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Usertests = sequelize.define('usertests', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		result: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'usertests'
	});

    Usertests.associate = function(models) {
        Usertests.belongsTo(models.user, {
			as: 'user',
			foreignKey: 'User_id'
		});
        Usertests.belongsTo(models.test, {
			as: 'test',
			foreignKey: 'Test_id'
		});
	};

	return Usertests;
};
