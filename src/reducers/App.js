import {
  FETCH_USD_RATE_SUCCESS,
  FETCH_USD_RATE_FAILURE,
  FETCH_SHEETS_SUCCESS,
  FETCH_SHEETS_FAILURE,
} from '../actions/App';

const defaultState = {
  USDRate: 79.6,
  snapshotTableDetails: [],
  cpAndFatki: {},
  defaultHeadersForVarieties: [
    'Variety',
    'Teja S17',
    '334 Sannam',
    'Byadgi 5531/668',
    '341',
    'No 5',
    'D D',
  ],
  defaultHeadersForFatki: [
    'Variety',
    'Teja Fatki',
    '334 S/10 Fatki',
    'Seed Variety',
  ],
  defaultHeadersForSnapShot: ['Date', 'Arrivals', 'Market Sentiment'],
  defaultFirstColumnVarieties: ['Medium', 'Medium Best', 'Best', 'Deluxe'],
  defaultFirstColumnForFatki: ['Medium', 'Best'],
};

function addVaritiesToCPAndFatki(cols, flag) {
  const columns = [...cols];
  let header = [];
  if (flag === 'cp') {
    header = [...defaultState.defaultFirstColumnVarieties];
  } else {
    header = [...defaultState.defaultFirstColumnForFatki];
  }

  for (let i = 0; i < cols.length; i++) {
    columns[i].unshift(header[i]);
  }
  return columns;
}

function handleSnapshot(col) {
  const arr = [[], [], []];
  for (let i = 0; i < col.length; i++) {
    arr[i].push(defaultState.defaultHeadersForSnapShot[i]);
    arr[i].push(col[i]);
  }

  return arr;
}

export function App(state = defaultState, { type, payload }) {
  switch (type) {
    case FETCH_USD_RATE_SUCCESS: {
      return { ...state, USDRate: payload };
    }
    case FETCH_USD_RATE_FAILURE: {
      return { ...state, USDRate: 79.6 };
    }
    case FETCH_SHEETS_SUCCESS: {
      return {
        ...state,
        cpAndFatki: {
          cp: addVaritiesToCPAndFatki(payload.cp, 'cp'),
          fatki: addVaritiesToCPAndFatki(payload.fatki, 'fatki'),
          ds: handleSnapshot(payload.ds),
        },
      };
    }
    case FETCH_SHEETS_FAILURE: {
      return {
        ...state,
        cpAndFatki: payload,
      };
    }
    default:
      return state;
  }
}

export default App;
