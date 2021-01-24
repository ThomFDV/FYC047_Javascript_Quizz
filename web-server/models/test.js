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
		nbQuestion: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'test'
	});
    Test.associate = function(models) {
        Test.belongsToMany(models.question, {
			through: 'question_test',
			as: 'questions',
			foreignKey: 'testId'
		});
        Test.belongsToMany(models.user, {
        	through: 'user_test',
			as: 'users',
			foreignKey: 'testId'
		});
	};
	return Test;
};
