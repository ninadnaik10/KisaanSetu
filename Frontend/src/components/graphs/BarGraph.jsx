

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   Rectangle,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { captializeFirstLetter } from "../../utils/helper/captializeFirstLetter";

// const BarGraph = ({ data, color, xKey, yKey, title = "Graph Title" }) => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <h2 className={`text-center font-semibold mb-4`}>{title}</h2>
//       <BarChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis
//           dataKey={xKey}
//           axisLine={{ stroke: color, strokeWidth: 2 }}
//           tick={{ fill: color, fontSize: "12px" }}
//           tickFormatter={(tick) => captializeFirstLetter(tick)}
//         />
//         <YAxis
//           axisLine={{ stroke: color, strokeWidth: 2 }}
//           tick={{ fill: color, fontSize: "12px" }}
//           tickFormatter={(tick) => `Rs.${tick}`}
//         />
//         <Bar
//           dataKey={yKey}
//           fill={color}
//           //   activeBar={<Rectangle fill="pink" stroke="blue" />}
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarGraph;









import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';

// Chart Component
const ChartExample = () => {
  // Chart Options: Control & configure the chart
  const [chartOptions, setChartOptions] = useState({
    // Data: Data to be displayed in the chart
    data: [
      { food: 'wheat', avgTemp: 2.3, Sales: 5420 },
      { food: 'rice', avgTemp: 6.3, Sales: 3760 },
      { food: 'potato', avgTemp: 16.2, Sales: 9530 },
      { food: 'onion', avgTemp: 22.8, Sales: 19740 },
      { food: 'cabbage', avgTemp: 14.5, Sales: 9600 },
      { food: 'sugarcane', avgTemp: 8.9, Sales: 1870 },
    ],
    // Series: Defines which chart type and data to use

    series: [{ type: 'bar', xKey: 'food', yKey: 'Sales' }],
  });

  return (
    // AgCharsReact component with options passed as prop
    <AgChartsReact options={chartOptions} />
  );
}

// Render component inside root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChartExample />);
export default ChartExample;





