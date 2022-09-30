import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import datalist from '../../MOCK_DATA.json';
export const DataChart = () => (
  <Line
    datasetIdKey='id'
    data={{
      labels: ['Jun', 'Jul', 'Aug'],
      datasets: [
        {
          id: 1,
          label: 'Jenny;s popularity',
          data: [1, 5, 7],
        },
        {
          id: 2,
          label: 'Barney;s popularity',
          data: [6, 2, 1],
        },
      ],
    }}
  />
);