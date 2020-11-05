import MainNavbar from '../Components/Navbar/MainNavbar'
import PortfolioPage from '../Components/Portfolio/index'
import Footer from '../Components/Footer/index'
import React from "react";
import { isAuth } from '../config/auth'

const user = isAuth()

class Portfolio extends React.Component {


  render(){
    console.log(this.props)
    return (
      <div className="App">
        {user ? <MainNavbar userId={isAuth().userId} /> : null}
        <PortfolioPage />
        <Footer />
      </div>
    );
  }
}

export default Portfolio
