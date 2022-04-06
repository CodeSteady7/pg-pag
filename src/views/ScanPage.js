import React, { useState } from 'react';
import QRCode from 'qrcode';
import { useNavigate } from 'react-router-dom';
// import { QrReader } from 'react-qr-reader';
import QrReader from 'react-camera-qr';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	Row,
	Col,
	Input,
	Button,
} from 'reactstrap';

function ScanPage(props) {
	const [text, setText] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [scanResultFile, setScanResultFile] = useState('');
	const [scanResultWebCam, setScanResultWebCam] = useState('');
	const [scanShow, setScanShow] = useState(true);
	const [data, setData] = useState('No result');

	const generateQrCode = async () => {
		try {
			const response = await QRCode.toDataURL('salah');
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	// const handleErrorWebcam = error => {
	// 	console.log('salah', error);
	// };

	// const handleScanWebCam = result => {
	// 	console.log(result);
	// 	if (result) {
	// 		setScanResultWebCam(result);
	// 	}
	// };

	const navigate = useNavigate();
	const onForm = () => {
		// navigate('/formulir');
		window.location.href = '/formulir';
	};

	let today = new Date();
	let date =
		today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

	// 	var sPageURL = window.location.search.substring(1);
	// 	var sURLVariables = sPageURL.split('&');
	// // var filename = url.substring(url.lastIndexOf('/') + 1);
	// {
	// 	console.log('data => ', filename);
	// }
	function GetURLParameter(sParam) {
		let sPageURL = window.location.search.substring(1);
		let sURLVariables = sPageURL.split('&');
		for (let i = 0; i < sURLVariables.length; i++) {
			let sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam) {
				return sParameterName[1];
			}
		}
	}
	let clock = GetURLParameter('jam');
	console.log(clock);
	// console.log('tes', sParameterName);

	let handleScan = datas => {
		if (datas) {
			// this.setState({
			// 	result: data,
			// });
			setData(datas);
		}
	};
	let handleError = err => {
		console.error(err);
	};

	return (
		<>
			<div className='wrapper'>
				<Row>
					<Col md='12'>
						<Card style={{ height: '1280px' }}>
							<CardHeader>
								<div className='tengah'>
									<CardTitle tag='h1'>SCAN QR CODE</CardTitle>
								</div>
								{/* <div className='tengah'>
									<p className='card-category'>Ketempat yang ada cahaya</p>
								</div> */}
							</CardHeader>
							<CardBody>
								<Button onClick={() => generateQrCode()}>Generate</Button>
								<h3 className='text-center text-uppercase'>Qr Code Scan By Camera</h3>
								{/* <QrReader
									delay={300}
									style={{ width: '50%' }}
									onError={handleErrorWebcam}
									onScan={handleScanWebCam}
								/> */}
								{scanShow ? (
									// <QrReader
									// 	onResult={(result, error) => {
									// 		if (result) {
									// 			setData(result?.text);

									// 			// setTimeout(() => {
									// 			setScanShow(false);
									// 			// }, 500);
									// 		}

									// 		if (error) {
									// 			console.info(error);
									// 		}
									// 	}}
									// 	style={{ width: '100px' }}
									// 	delay={1000}
									// />
									<QrReader
										delay={300}
										onError={handleError}
										onScan={handleScan}
										style={{ width: '100%' }}
									/>
								) : (
									''
								)}
								{data === 'next'
									? navigate(`/formulir/from01?jam=${clock}&tgl=${date}`)
									: ''}
								<div className='text-center'>
									<h3>Result : {data}</h3>
								</div>
								{/* {data === 'next' ? navigate('/formulir') : ''} */}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default ScanPage;
