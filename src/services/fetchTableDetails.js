import axios from 'axios';

const spreadsheetId = '1dwhlEIQ_H0NcAIT-SSg1sM_ZpsT2KZNUvc2fqWI9lYU';
const API_KEY = 'AIzaSyBshQgbcousVir0__rUic0Bj1Ei6XYuKrE';

function modifyColumns(column, repetition, scale) {
  // Referring docs for spreadsheets https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet

  const arr = [];
  for (let i = 1; i <= repetition; i++) {
    const subArr = [];
    for (let j = i; j < column.length; j += scale) {
      subArr.push(column[j]);
    }
    arr.push(subArr);
  }
  return arr;
}

const paramsOfSheets = {
  majorDimension: 'ROWS',
  rangeForCP: 'Consolidated%20Prices!A1:Y',
  rangeForFatki: 'Fatki%20Table!A1:G',
  rangeForDS: 'Daily%20Snapshot!A1:C',
};

export async function getSheetsDetails() {
  const { rangeForCP, rangeForFatki, rangeForDS, majorDimension } =
    paramsOfSheets;

  const response = await axios.get(
    `https://content-sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?ranges=${rangeForCP}&ranges=${rangeForFatki}&ranges=${rangeForDS}&majorDimension=${majorDimension}&key=${API_KEY}`
  );

  const { valueRanges } = response.data;

  const CPColumn = valueRanges[0].values[valueRanges[0].values.length - 1];

  const FatkiColumn = valueRanges[1].values[valueRanges[1].values.length - 1];

  const dsColumn = valueRanges[2].values[valueRanges[2].values.length - 1];

  return {
    cp: modifyColumns(CPColumn, 4, 4),
    fatki: modifyColumns(FatkiColumn, 2, 2),
    ds: dsColumn,
  };
}

export function caterDataForCharts(payload) {
  const varieties = ['teja', '334', 'byadgi', '341', 'no 5', 'dd'];

  const data = {};

  for (const variety of varieties) {
    data[variety] = payload.filter((col) =>
      col[0].toLowerCase().includes(variety)
    );
  }

  return data;
}

export async function getSheetsDetailsForCP() {
  const response = await axios.get(
    `https://content-sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${paramsOfSheets.rangeForCP}?majorDimension=COLUMNS&key=${API_KEY}`
  );

  return {
    dates: response.data.values[0],
    data: caterDataForCharts(response.data.values),
  };
}
