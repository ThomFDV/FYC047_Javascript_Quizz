module.exports = (sequelize, DataTypes) => {
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
    Test.associate = (models) => {
        Test.belongsToMany(models.question, {
			through: 'question_test',
			as: 'questions',
			foreignKey: 'testId'
		});
        Test.belongsTo(models.theme);
        Test.hasMany(models.room, {
        	as: 'room',
			foreignKey: 'testId'
		});
	};
	return Test;
};
