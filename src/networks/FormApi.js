import axios from 'axios';
import { useState, useEffect } from 'react';

function FormApi() {
	const [tblField, setTblField] = useState([]);
	const [tblJam, setTblJam] = useState([]);
	const [aktif, setAktif] = useState([]);
	const [view_volfBF, setview_volfBF] = useState([]);
	const [view_voltaf, setview_voltAF] = useState([]);
	const [view_loadamp, setView_loadamp] = useState([]);
	const [view_powerfactor, setView_powerfactor] = useState([]);
	const [view_load_mw, setView_load_mw] = useState([]);
	const [view_mvar, setView_mvar] = useState([]);

	useEffect(() => {
		const FieldTbl = async () => {
			// const field = await axios.get('http://localhost:4000/users/getfield');
			const field = await axios.get('http://pgpag.aqilatech.com/users/getfield');
			setTblField(field.data);
			// setAktif(field.data[0].nilai_jam);
		};
		const view_volfBF = async () => {
			const volfBF = await axios.get('http://pgpag.aqilatech.com/users/volfBF');
			setview_volfBF(volfBF.data);
			// setAktif(field.data[0].nilai_jam);
		};
		const Table_jam = async () => {
			const tbl_jam = await axios.get('http://pgpag.aqilatech.com/users/view_jam');
			setTblJam(tbl_jam.data);
		};
		const view_voltaf = async () => {
			const voltAF = await axios.get('http://pgpag.aqilatech.com/users/volfAF');
			setview_voltAF(voltAF.data);
		};
		const view_loadamp = async () => {
			const loadAmp = await axios.get('http://pgpag.aqilatech.com/users/loadamp');
			setView_loadamp(loadAmp.data);
		};
		const view_powerFactor = async () => {
			const powerfactor = await axios.get(
				'http://pgpag.aqilatech.com/users/powerfactor'
			);
			setView_powerfactor(powerfactor.data);
		};
		const view_load_mw = async () => {
			const load_mw = await axios.get('http://pgpag.aqilatech.com/users/load_mw');
			setView_load_mw(load_mw.data);
		};
		const view_mvar = async () => {
			const mvar = await axios.get('http://pgpag.aqilatech.com/users/mvar');
			setView_mvar(mvar.data);
		};

		view_voltaf();
		FieldTbl();
		Table_jam();
		view_volfBF();
		view_loadamp();
		view_powerFactor();
		view_load_mw();
		view_mvar();
	}, []);

	// map.tblField()
	return (
		console.log('tblJam => ', tblJam),
		{
			powerfactor: [view_powerfactor, setView_powerfactor],
			voltAF: [view_voltaf, setview_voltAF],
			tbl_Field: [tblField, setTblField],
			aktif: [aktif, setAktif],
			tbl_Jam: [tblJam, setTblJam],
			volfBF: [view_volfBF, setview_volfBF],
			loadAmp: [view_loadamp, setView_loadamp],
			load_mw: [view_load_mw, setView_load_mw],
			mvar: [view_mvar, setView_mvar],
		}
	);
}

export default FormApi;
