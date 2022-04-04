module.exports = (sequelize, DataTypes) => {
	const Mvar = sequelize.define(
		'Mvar',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},

			valueMeter_mvar: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			valueRecord_mvar: {
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
			tableName: 'mvar',
		}
	);
	return Mvar;
};
