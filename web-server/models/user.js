module.exports = function(sequelize, DataTypes) {
	const User = sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		firstname: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		lastname: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		login: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		mail: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
	}, {
		tableName: 'user'
	});

	User.associate = function(models) {
		User.hasMany(models.usertests, {
			as: 'usertests',
			foreignKey: 'User_id'
		});
	};

	return User;
};
