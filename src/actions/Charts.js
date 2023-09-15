import { getSheetsDetailsForCP } from '../services/fetchTableDetails';

export function fetchChartDetails() {
  return async function fetchChartDetails(dispatch) {
    try {
      const response = await getSheetsDetailsForCP();
      dispatch(fetchChartDetailsSuccess(response));
    } catch (err) {
      dispatch(fetchChartDetailsFailure(err));
    }
  };
}

export const FETCH_CHART_DETAILS_SUCCESS = 'FETCH_CHART_DETAILS_SUCCESS';

export function fetchChartDetailsSuccess(payload) {
  return {
    type: FETCH_CHART_DETAILS_SUCCESS,
    payload,
  };
}

export const FETCH_CHART_DETAILS_FAILURE = 'FETCH_CHART_DETAILS_FAILURE';

export function fetchChartDetailsFailure(err) {
  return {
    type: FETCH_CHART_DETAILS_FAILURE,
    payload: err,
  };
}

export const FETCH_VARIETY = 'FETCH_VARIETY';
export function fetchDetailsForVariety(type, range) {
  return {
    type: FETCH_VARIETY,
    payload: {
      variety: type,
      range,
    },
  };
}
