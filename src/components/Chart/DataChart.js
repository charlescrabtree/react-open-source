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
          label: 'name',
          data: [5, 6, 7],
        },
        {
          id: 2,
          label: 'name',
          data: [3, 2, 1],
        },
      ],
    }}
  />
);