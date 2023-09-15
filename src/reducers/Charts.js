import { FETCH_CHART_DETAILS_SUCCESS, FETCH_VARIETY } from '../actions/Charts';

const defaultState = {
  chartsMasterData: {},
  chartsCurrentContents: {},
};

export function retrieveInfo(state, variety, range) {
  let data = [];
  const masterData = [...state.chartsMasterData.data[variety]];

  let rangeBuffer = range;
  if (masterData.length > 0) {
    while (rangeBuffer - 1 >= 0) {
      const buffer = [];
      for (const col of masterData) {
        buffer.push(col[col.length - rangeBuffer - 2]);
      }
      data.push(buffer);
      rangeBuffer--;
    }

    data = data.map((col) => col.map((el) => parseInt(el, 10)));

    for (let i = range - 1; i >= 0; i--) {
      data[range - 1 - i].unshift(
        state.chartsMasterData.dates[
          state.chartsMasterData.dates.length - i - 1
        ]
      );
    }

    const newData = { ...state.chartsCurrentContents, [variety]: data };

    return { ...state, chartsCurrentContents: newData };
  }

  return { ...state };
}

export function Chart(state = defaultState, action) {
  switch (action.type) {
    case FETCH_CHART_DETAILS_SUCCESS:
      return { ...state, chartsMasterData: action.payload };
    case FETCH_VARIETY:
      const { variety, range } = action.payload;
      return retrieveInfo(state, variety, range);
    default:
      return state;
  }
}

export default Chart;
