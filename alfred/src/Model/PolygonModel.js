import axios from 'axios';

const URL = 'https://cloud.iexapis.com/stable/stock';
const API = process.env.REACT_APP_API_KEY;


export class PolygonModel {
    static search = (query) => {
      return axios.get(`${URL}/${query}/quote?token=${API}`)
    }

    static show = (symbol) => {
      return fetch(`${URL}/${symbol}/quote?token=${API}`).then(response => response.json());
    }

}


export default PolygonModel;

