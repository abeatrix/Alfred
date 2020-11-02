import MainNavbar from '../Components/Navbar/MainNavbar'
import PortfolioPage from '../Components/Portfolio/index'
import Footer from '../Components/Footer/index'
import React from "react";

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
        <MainNavbar />
        <PortfolioPage />
        <Footer />
      </div>
    );
  }
}

export default Portfolio
