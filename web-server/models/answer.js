/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
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
		}
	}, {
		tableName: 'answer'
	});

    Answer.associate = function(models) {
        Answer.hasMany(models.question, {
			as: 'question',
			foreignKey: 'Answer_id'
		});
	};
	return Answer;
};
