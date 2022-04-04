const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');
const form1Ctrl = require('../controllers/form1Ctrl');
const { route } = require('../app');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

// Endpoint User
router.post('/newakun', userCtrl.newAkun);
router.post('/login', userCtrl.login);
router.get('/refresh_token', userCtrl.refreshToken);

// Endpoint form1Ctrl
router.post('/form1', form1Ctrl.form1Add);
router.get('/getfield', form1Ctrl.getField);
router.get('/view_jam', form1Ctrl.view_jam);
router.get('/volfBF', form1Ctrl.getvolfBF);
router.get('/volfAF', form1Ctrl.getvoltAF);
router.get('/loadamp', form1Ctrl.getloadAmp);
router.get('/powerfactor', form1Ctrl.getpowerfactor);
router.get('/loadmw', form1Ctrl.get_loadmw);
router.get('/mvar', form1Ctrl.getMvar);
router.get('/load_mw', form1Ctrl.get_loadmw);
router.get('/mvar', form1Ctrl.getMvar);

// router.get('/tbl_view')

module.exports = router;
