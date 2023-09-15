import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from 'react-google-charts';

// custom components
import Button from '../Button/Button';

// actions
import { fetchDetailsForVariety } from '../../actions/Charts';

export function LineChart({ variety }) {
  const dispatch = useDispatch();

  const { chartsCurrentContents } = useSelector((state) => state.chart);

  let LineData = [['Date', 'Medium', 'Medium Best', 'Best', 'Deluxe']];

  if (chartsCurrentContents[variety]?.length > 0) {
    LineData.push(...chartsCurrentContents[variety]);
  }

  const LineChartOptions = {
    title: `${variety} Dried Red Chilli Farmer Live Rates`,
    legend: {
      position: 'bottom',
    },
    series: {
      1: { curveType: 'function' },
    },
  };

  useEffect(() => {
    dispatch(fetchDetailsForVariety(variety, 6));
  }, [variety]);

  return (
    <div className="container mt-5">
      <Chart
        width={'700px'}
        height={'410px'}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={LineData}
        options={LineChartOptions}
        rootProps={{ 'data-testid': '2' }}
      />

      <Button
        text="One Week"
        onClick={() => dispatch(fetchDetailsForVariety(variety, 6))}
      />
      <Button
        text="One Month"
        onClick={() => dispatch(fetchDetailsForVariety(variety, 30))}
      />
      <Button
        text="Three Months"
        onClick={() => dispatch(fetchDetailsForVariety(variety, 90))}
      />
    </div>
  );
}

export default LineChart;
