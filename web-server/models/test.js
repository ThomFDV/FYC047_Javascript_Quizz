/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Test = sequelize.define('test', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
		dateCreation: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		nbQuestion: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'test'
	});
    Test.associate = function(models) {
        Test.hasMany(models.testquestions, {
			as: 'testquestions',
			foreignKey: 'Test_id'
		});
        Test.hasMany(models.usertests, {
			as: 'usertests',
			foreignKey: 'Test_id'
		});
	};
	return Test;
};
