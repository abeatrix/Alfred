import axios from 'axios';


class PortfolioModel {
    static search = (query) => {
      return axios.get(`${process.env.REACT_APP_BACKEND_PORTFOLIO_API_URL}/${query}`)
    }
}

export default PortfolioModel;
