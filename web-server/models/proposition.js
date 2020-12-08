/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Proposition = sequelize.define('proposition', {
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
		tableName: 'proposition'
	});
	Proposition.associate = function(models) {
		Proposition.hasMany(models.question, {
			as: 'proposition1',
			foreignKey: 'Proposition_id1'
		});
		Proposition.hasMany(models.question, {
			as: 'proposition2',
			foreignKey: 'Proposition_id2'
		});
		Proposition.hasMany(models.question, {
			as: 'proposition3',
			foreignKey: 'Proposition_id3'
		});
	};
	return Proposition;
};
