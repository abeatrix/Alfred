// import axios from 'axios';

// const URL = 'https://cloud.iexapis.com/stable/stock';
const API = process.env.REACT_APP_FINNHUB_API_KEY;


export class FinnhubModel {
    // static search = (query) => {
    //   return axios.get(`${URL}/${query}/quote?token=${API}`)
    // }

    // static show = (symbol) => {
    //   return fetch(`${URL}/${symbol}/quote?token=${API}`).then(response => response.json());
    // }

    static news = () => {
        return fetch(`https://finnhub.io/api/v1/news?category=general&token=${API}`).then(response => response.json())
    }

}


export default FinnhubModel;

