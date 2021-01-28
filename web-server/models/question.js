/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => {
	const Question = sequelize.define('question', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		content: {
			type: DataTypes.STRING(500),
			allowNull: false
		},
		imagePath: {
			type: DataTypes.STRING(70),
			allowNull: true
		}
	}, {
		tableName: 'question'
	});

	Question.associate = (models) => {
		Question.belongsToMany(models.test, {
			through: 'question_test',
			as: 'tests',
			foreignKey: 'questionId'
		});
		Question.hasMany(models.answer, {
			as: 'answers',
			foreignKey: 'questionId'
		});
	};

	return Question;
};
