import axios from 'axios';


class PortfolioModel {
    static add = (data) => {
      return axios.post(`${process.env.REACT_APP_BACKEND_PORTFOLIO_API_URL}`);
    }

    static show = (userId) => {
      return axios.get(`${process.env.REACT_APP_BACKEND_USER_API_URL}/${userId}/portfolio`);
    }

    static detail = (portId) => {
      return axios.get(`${process.env.REACT_APP_BACKEND_PORTFOLIO_API_URL}/${portId}/detail`).then(response => response.json());
    }

}

export default PortfolioModel;
