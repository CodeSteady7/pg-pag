const jwt = require('jsonwebtoken');
const Validator = require('fastest-validator');
const { Users } = require('../models');

const v = new Validator();
const userCtrl = {
	newAkun: async (req, res) => {
		try {
			const schema = {
				username: 'string',
				password: 'string|min:6',
				role: 'string|max:1',
			};

			const validate = v.validate(req.body, schema);
			if (validate.length) {
				return res.status(400).json(validate);
			}

			const user = await Users.create(req.body);
			res.status(200).json({ user, msg: 'User berhasil ditambahkan' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	login: async (req, res) => {
		try {
			const { username, password } = req.body;
			const user = await Users.findOne({ where: { username: username } });
			if (!user) return res.status(400).json({ msg: 'User does not exist' });

			const passwords = await Users.findOne({ where: { password: password } });
			if (!passwords) return res.status(400).json({ msg: 'password error' });

			const accesstoken = createAcceessToken({ id: user._id });
			const refreshtoken = createRefreshToken({ id: user._id });

			res.cookie('refreshtoken', refreshtoken, {
				httpOnly: true,
				path: '/users/refresh_token',
				maxAge: 7 * 24 * 60 * 1000,
			});

			res.json({
				user,
				accesstoken,
				refreshtoken,
				msg: 'login success',
			});
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	refreshToken: (req, res) => {
		try {
			const rf_token = req.cookies.refreshtoken;
			console.log(rf_token);
			if (!rf_token)
				return res.status(400).json({ msg: 'Please login or Register' });

			jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
				if (err) return res.status(400).json({ msg: 'Please login verify' });

				const accesstoken = createAcceessToken({ id: user.id });

				res.json({ user, accesstoken, rf_token });
			});
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},
};
const createAcceessToken = user => {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '11m',
	});
};

const createRefreshToken = user => {
	return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '7d',
	});
};

module.exports = userCtrl;
