/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
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

	Question.associate = function(models) {
		Question.hasMany(models.testquestions, {
			as: 'testquestions',
			foreignKey: 'Question_id'
		});
		Question.belongsTo(models.proposition, {
			as: 'proposition1',
			foreignKey: 'Proposition_id1'
		});
		Question.belongsTo(models.proposition, {
			as: 'proposition2',
			foreignKey: 'Proposition_id2'
		});
		Question.belongsTo(models.proposition, {
			as: 'proposition3',
			foreignKey: 'Proposition_id3'
		});
		Question.belongsTo(models.answer, {
			as: 'answer',
			foreignKey: 'Answer_id'
		});
	};

	return Question;
};
