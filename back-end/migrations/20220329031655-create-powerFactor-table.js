'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('powerFactor', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			value: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('powerFactor');
	},
};
