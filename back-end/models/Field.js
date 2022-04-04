module.exports = (sequelize, DataTypes) => {
	const Field = sequelize.define(
		'Field',
		{
			fieldId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			valueV: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			valueA: {
				type: DataTypes.INTEGER,
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
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'field',
		}
	);
	return Field;
};

// module.exports = (sequelize, DataTypes) => {
// 	const view_field = sequelize.define(
// 		'view_field',
// 		{
// 			fieldId: {
// 				type: DataTypes.INTEGER,
// 				primaryKey: true,
// 				autoIncrement: true,
// 				allowNull: false,
// 			},
// 			valueV: {
// 				type: DataTypes.INTEGER,
// 				allowNull: false,
// 			},
// 			valueA: {
// 				type: DataTypes.INTEGER,
// 				allowNull: false,
// 			},
// 			createdAt: {
// 				type: DataTypes.DATE,
// 				allowNull: false,
// 			},
// 			updatedAt: {
// 				type: DataTypes.DATE,
// 				allowNull: false,
// 			},
// 			urutan_jam: {
// 				type: DataTypes.INTEGER,
// 				allowNull: false,
// 			},
// 			nilai_jam: {
// 				type: DataTypes.VARCHAR,
// 				allowNull: false,
// 			},
// 		},
// 		{
// 			tableName: 'view_field',
// 		}
// 	);
// 	return view_field;
// };
