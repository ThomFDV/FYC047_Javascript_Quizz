module.exports = (sequelize, DataTypes) => {
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
		username: {
			type: DataTypes.STRING(45),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		isPlaying: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	}, {
		tableName: 'user'
	});

	User.associate = (models) => {
		User.belongsToMany(models.room, {
			through: models.user_room,
			foreignKey: 'userId'
		});
	};

	return User;
};
