import MainNavbar from '../Components/Navbar/MainNavbar'
import PortfolioPage from '../Components/Portfolio/index'
import Footer from '../Components/Footer/index'
import React from "react";
import { isAuth } from '../config/auth'

const user = isAuth()
const userId = user._id

class Portfolio extends React.Component {
  state = {
    marketHourSearched: false
  }

  componentDidMount() {
    this.setState({ marketHourSearched: true})
  }

  render(){
    return (
      <div className="App">
        <MainNavbar userId={userId} />
        <PortfolioPage />
        <Footer />
      </div>
    );
  }
}

export default Portfolio
