module.exports = (sequelize, DataTypes) => {
	const powerFactor = sequelize.define(
		'powerFactor',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valuePowerfactor: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			kode_jam: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			tableName: 'powerfactor',
		}
	);
	return powerFactor;
};
