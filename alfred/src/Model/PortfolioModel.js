import axios from 'axios';


class PortfolioModel {
    static add = (data) => {
      return axios.post(`${process.env.REACT_APP_BACKEND_PORTFOLIO_API_URL}`).then((response) => response.json());
    }
}

export default PortfolioModel;
