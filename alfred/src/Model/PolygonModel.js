import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

const URL = 'https://cloud.iexapis.com/stable/stock';
const API = process.env.REACT_APP_API_KEY;


class PolygonModel {
    static search = (query) => {
      return axios.get(`${URL}/${query}/quote?token=${API}`)
    }
}

export default PolygonModel;

