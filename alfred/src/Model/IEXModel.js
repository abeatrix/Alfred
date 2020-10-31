import axios from 'axios';

const URL = process.env.REACT_APP_IEX_URL
const API = process.env.REACT_APP_IEX_API_KEY;


export class PolygonModel {
    static search = (query) => {
      return axios.get(`${URL}/${query}/quote?token=${API}`)
    }

    static show = (symbol) => {
      return fetch(`${URL}/${symbol}/quote?token=${API}`).then(response => response.json());
    }

    static stockinfo = (symbol) => {
        return fetch(`${URL}/${symbol}/batch?types=quote&token=${API}`).then(response => response.json());
    }

    static dailychart = (symbol) => {
    return fetch(`${URL}/${symbol}/chart/1y?token=${API}`).then(response => response.json());
    }


}


export default PolygonModel;

