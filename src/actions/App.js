import { getUSDRate } from '../services/fetchUSDRates';
import { getSheetsDetails } from '../services/fetchTableDetails';

/** Fetch USD Rate - Start*/

export const FETCH_USD_RATE = 'FETCH_USD_RATE';

export function fetchUSDRate() {
  return async function getRate(dispatch) {
    try {
      const response = await getUSDRate();
      dispatch(fetchUSDRateSuccess(response));
    } catch (err) {
      dispatch(fetchUSDRateFailure());
    }
  };
}

export const FETCH_USD_RATE_SUCCESS = 'FETCH_USD_RATE_SUCCESS';

export function fetchUSDRateSuccess(payload) {
  return {
    type: FETCH_USD_RATE_SUCCESS,
    payload,
  };
}

export const FETCH_USD_RATE_FAILURE = 'FETCH_USD_RATE_FAILURE';

export function fetchUSDRateFailure(err) {
  return {
    type: FETCH_USD_RATE_FAILURE,
  };
}

/** Fetch USD Rate - End */

/** Fetch sheetsDetails - Start */

// CP means Consolidated Prices
export function fetchSheetsDetails() {
  return async function fetchSheetsDetails(dispatch) {
    try {
      const response = await getSheetsDetails();
      dispatch(fetchSheetsDetailsSuccess(response));
    } catch (err) {
      dispatch(fetchSheetsDetailsFailure(err));
    }
  };
}

export const FETCH_SHEETS_SUCCESS = 'FETCH_SHEETS_SUCCESS';

export function fetchSheetsDetailsSuccess(payload) {
  return {
    type: FETCH_SHEETS_SUCCESS,
    payload,
  };
}

export const FETCH_SHEETS_FAILURE = 'FETCH_SHEETS_FAILURE';

export function fetchSheetsDetailsFailure(payload) {
  return {
    type: FETCH_SHEETS_FAILURE,
    payload,
  };
}

/** Fetch sheetsDetails - End */
