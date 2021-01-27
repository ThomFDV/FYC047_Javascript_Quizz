/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
	const Answer = sequelize.define('answer', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		content: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		isCorrect: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}, {
		tableName: 'answer'
	});

    Answer.associate = (models) => {
        Answer.belongsTo(models.question);
	};
	return Answer;
};
