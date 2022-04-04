const canvasField = {
	data: canvas => {
		return {
			labels: ['01.00', '05.00', '09.00', '13.00', '17.00', '21.00'],
			datasets: [
				{
					label: 'V',
					data: [11, 4, 19.4, 5.1, 8, 13],
					backgroundColor: 'white',
					fill: false,
					borderColor: 'rgba(255, 99, 132, 0.8)',
					// borderWidth: 1,
				},
				{
					label: 'A',
					data: [47, 52, 67, 58, 9, 50],
					backgroundColor: 'white',
					fill: false,
					borderColor: 'rgba(54, 162, 235, 0.8)',
				},
			],
		};
	},
	options: {
		// onClick: e => {
		//     handleShow();
		// },
		scales: {
			y: {
				ticks: {
					color: '#9f9f9f',
					beginAtZero: false,
					maxTicksLimit: 5,
				},
				grid: {
					drawBorder: false,
					display: false,
				},
			},
			x: {
				barPercentage: 1.6,
				grid: {
					drawBorder: false,
					display: false,
				},
				ticks: {
					padding: 20,
					color: '#9f9f9f',
				},
			},
		},
		responsive: true,
		maintainAspectRatio: true,
		title: {
			display: true,
			text: 'Field',
			fontSize: 25,
		},
		legend: {
			display: 'true',
			labels: {
				fontSize: 10,
			},
		},
	},
};
const canvasVoltBeforeTrafo = {
	data: canvas => {
		return {
			labels: ['01.00', '05.00', '09.00', '13.00', '17.00', '21.00'],
			datasets: [
				{
					label: ['V'],
					data: [16.0, 18.0, 10.0, 4, 12.0, 14.0, 20.0],
					backgroundColor: [
						'rgba(255, 99, 132, 0.8)',
						'rgba(255, 99, 132, 0.8)',
						'rgba(255, 99, 132, 0.8)',
						'rgba(255, 99, 132, 0.8)',
						'rgba(255, 99, 132, 0.8)',
						'rgba(255, 99, 132, 0.8)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(255, 99, 132, 1)',
						'rgba(255, 99, 132, 1)',
						'rgba(255, 99, 132, 1)',
						'rgba(255, 99, 132, 1)',
						'rgba(255, 99, 132, 1)',
					],
					borderWidth: 3,
					hoverOffset: 10,
					barThickness: 12,
				},
			],
		};
	},
	options: handleShow => {
		return {
			onClick: e => {
				handleShow();
			},
			maintainAspectRatio: true,
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
			title: {
				display: true,
				text: 'Voltage Before',
				fontSize: 25,
			},
			legend: {
				display: true,
				position: 'bottom',
			},
		};
	},
};

module.exports = {
	canvasField,
	canvasVoltBeforeTrafo,
};

// scales: {
//     x: {
//         type: 'time',
//         time: {
//             minUnit: 'month',
//         },
//     },
//     y: {
//         suggestedMax: 45,
//         ticks: {
//             stepSize: 5,
//             //max: 100
//         },
//     },
// },
