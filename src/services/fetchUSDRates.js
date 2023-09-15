import axios from 'axios';

const params = {
  API_KEY: 'fa936138ca2f3fa679d8',
  compact: 'ultra',
  q: 'USD_INR',
};

export async function getUSDRate() {
  const response = await axios.get(
    `http://free.currencyconverterapi.com/api/v5/convert?q=${params.q}&compact=${params.compact}&apiKey=${params.API_KEY}`
  );
  return response.data.USD_INR;
}
