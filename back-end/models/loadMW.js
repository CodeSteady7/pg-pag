module.exports = (sequelize, DataTypes) => {
	const loadMW = sequelize.define(
		'loadMW',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},

			valueMeter_loadmw: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			valueRecord_loadmw: {
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
			tableName: 'loadmw',
		}
	);
	return loadMW;
};
