/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Testquestions = sequelize.define('testquestions', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		}
	}, {
		tableName: 'testquestions'
	});

    Testquestions.associate = function(models) {
        Testquestions.belongsTo(models.test, {
			as: 'test',
			foreignKey: 'Test_id'
		});
        Testquestions.belongsTo(models.question, {
			as: 'question',
			foreignKey: 'Question_id'
		});
	};

	return Testquestions;
};
