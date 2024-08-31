// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
// //var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class Line extends Component {
// 	render() {
// 		const options = {
// 			animationEnabled: true,
// 			title:{
// 				text: "Monthly Revenue - 2024"
// 			},
// 			axisX: {
// 				valueFormatString: "MMM"
// 			},
// 			axisY: {
// 				// title: "Sales (in USD)",
// 				prefix: "$"
// 			},
// 			data: [{
// 				yValueFormatString: "$#,###",
// 				xValueFormatString: "MMMM",
// 				type: "spline",
// 				dataPoints: [
// 					{ x: new Date(2024, 0), y: 25060 },
// 					{ x: new Date(2024, 1), y: 27980 },
// 					{ x: new Date(2024, 2), y: 42800 },
// 					{ x: new Date(2024, 3), y: 32400 },
// 					{ x: new Date(2024, 4), y: 35260 },
// 					{ x: new Date(2024, 5), y: 33900 },
// 					{ x: new Date(2024, 6), y: 40000 },
// 					{ x: new Date(2024, 7), y: 52500 },
// 					{ x: new Date(2024, 8), y: 32300 },
// 					// { x: new Date(2024, 9), y: 42000 },
// 					// { x: new Date(2024, 10), y: 37160 },
// 					// { x: new Date(2024, 11), y: 38400 }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// }
// export default Line;                        


import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [0, 10000, 20000, 30000, 20000, 23900, 30490,25000,30000];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',

];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={1000}
      height={300}
      series={[
        // { data: pData, label: 'pv' },
        { data: uData, label: 'Monthly Revenue-2024' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}



