import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from './components/Table/Table';
import Button from './components/Button/Button';
import DisplayVariety from './components/DisplayVariety';
import Header from './components/Header';

import { fetchUSDRate, fetchSheetsDetails } from './actions/App';
import { fetchChartDetails } from './actions/Charts';

import { varities } from './common/constants';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const [chartType, setChartType] = useState('teja');
  const {
    USDRate,
    defaultHeadersForVarieties,
    defaultHeadersForFatki,
    cpAndFatki,
  } = useSelector((state) => state.app);

  const { chartsMasterData } = useSelector((state) => state.chart);

  useEffect(() => {
    dispatch(fetchUSDRate());
    dispatch(fetchSheetsDetails());
    dispatch(fetchChartDetails());
  }, []);

  return (
    <div className="App">
      <Header />
      <p>USD Rate {USDRate}</p>
      <Button />
      <Table columns={cpAndFatki.ds} name="daily-snap-shot-table" />
      <Table
        headers={defaultHeadersForVarieties}
        columns={cpAndFatki.cp}
        name="consolidated-prices-table"
      />
      <Table
        headers={defaultHeadersForFatki}
        columns={cpAndFatki.fatki}
        name="fatki-table"
      />

      {varities.map((variety) => (
        <Button text={variety} onClick={() => setChartType(variety)} />
      ))}

      {Object.keys(chartsMasterData).length !== 0 && (
        <DisplayVariety chilliType={chartType} />
      )}
    </div>
  );
}

export default App;
