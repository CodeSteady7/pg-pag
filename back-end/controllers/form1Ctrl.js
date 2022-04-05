const Validator = require('fastest-validator');
// const { Op, QueryTypes, sequelize } = require('sequelize');
const sequelize = require('sequelize');

const {
	Field,
	loadAmp,
	loadMW,
	Mvar,
	powerFactor,
	voltAfterTrafo,
	voltBeforeTrafo,
	view_field,
	tbl_jam,
	view_volfBF,
	view_voltaf,
	view_loadamp,
	view_powerfactor,
	view_loadmw,
	view_mvar,
} = require('../models');

const v = new Validator();

const form1Ctrl = {
	form1Add: async (req, res) => {
		try {
			const schemaField = {
				valueV: 'string',
				valueA: 'string',
				kode_jam: 'string',
				valueV_BT: 'string',
				valueVolta1_2: 'string',
				valueVolta2_3: 'string',
				valueVolta3_1: 'string',
				value1Loadamp: 'string',
				value2Loadamp: 'string',
				value3Loadamp: 'string',
				valuePowerfactor: 'string',
				valueMeter_loadmw: 'string',
				valueRecord_loadmw: 'string',
				valueMeter_mvar: 'string',
				valueRecord_mvar: 'string',
			};

			const {
				valueV,
				valueA,
				kode_jam,
				valueV_BT,
				valueVolta1_2,
				valueVolta2_3,
				valueVolta3_1,
				value1Loadamp,
				value2Loadamp,
				value3Loadamp,
				valuePowerfactor,
				valueMeter_loadmw,
				valueRecord_loadmw,
				valueMeter_mvar,
				valueRecord_mvar,
			} = req.body;

			// Field.hasOne(Form1, { foreignKey: 'id' });
			// Field.belongsTo(Form1, { foreignKey: 'fieldId' });

			const validate = v.validate(req.body, schemaField);

			if (validate.length) {
				return res.status(400).json(validate);
			}
			const field = await Field.create({
				valueV: valueV,
				valueA: valueA,
				kode_jam: kode_jam,
			});
			const before = await voltBeforeTrafo.create({
				valueV_BT: valueV_BT,
				kode_jam: kode_jam,
			});
			const voltAfter = await voltAfterTrafo.create({
				valueVolta1_2: valueVolta1_2,
				valueVolta2_3: valueVolta2_3,
				valueVolta3_1: valueVolta3_1,
				kode_jam: kode_jam,
			});

			const getloadAmp = await loadAmp.create({
				value1Loadamp: value1Loadamp,
				value2Loadamp: value2Loadamp,
				value3Loadamp: value3Loadamp,
				kode_jam: kode_jam,
			});

			const powerfactor = await powerFactor.create({
				valuePowerfactor: valuePowerfactor,
				kode_jam: kode_jam,
			});

			const get_loadmw = await loadMW.create({
				valueMeter_loadmw: valueMeter_loadmw,
				valueRecord_loadmw: valueRecord_loadmw,
				kode_jam: kode_jam,
			});

			const get_mvar = await Mvar.create({
				valueMeter_mvar: valueMeter_mvar,
				valueRecord_mvar: valueRecord_mvar,
				kode_jam: kode_jam,
			});

			res.status(200).json({
				field,
				before,
				voltAfter,
				loadAmp,
				getloadAmp,
				powerfactor,
				get_loadmw,
				get_mvar,
				msg: 'Success',
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getField: async (req, res) => {
		try {
			const field = await view_field.findAll();
			res.json(field);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getvoltAF: async (req, res) => {
		try {
			const volfAF = await view_voltaf.findAll();
			res.json(volfAF);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getvolfBF: async (req, res) => {
		try {
			const volfBF = await view_volfBF.findAll();

			res.json(volfBF);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getloadAmp: async (req, res) => {
		try {
			const loadAmp = await view_loadamp.findAll();
			res.json(loadAmp);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getpowerfactor: async (req, res) => {
		try {
			const powerfactor = await view_powerfactor.findAll();
			res.json(powerfactor);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	view_jam: async (req, res) => {
		try {
			const jam = await tbl_jam.findAll();

			res.json(jam);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	get_loadmw: async (req, res) => {
		try {
			const loadmw = await view_loadmw.findAll();
			res.json(loadmw);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	getMvar: async (req, res) => {
		try {
			const getvar = await view_mvar.findAll();
			res.json(getvar);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
};

module.exports = form1Ctrl;

// const field2 = await Field.decrement(
// 	{
// 		fieldId: 1,
// 	},
// 	{
// 		where: { fieldId: 1 },
// 	}
// );
// const field2 = await Field.findByPk(31);
// if (field2 === null) {
// 	console.log('Not found!');
// } else {
// 	console.log(field2 instanceof Field); // true
// 	// Its primary key is 123
// }

// const { count, rows } = await Field.findAndCountAll({
// 	where: {
// 		valueV: {
// 			[Op.like]: 'foo%',
// 		},
// 	},
// 	offset: 1,
// 	limit: 1,
// });

// const field = await sequelize.query('SELECT * FROM `field`');
// console.log('=>>>', count);
// console.log('=>>>', rows);
