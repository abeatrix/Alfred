import MainNavbar from '../Components/Navbar/MainNavbar'
import PortfolioPage from '../Components/Portfolio/index'
import Footer from '../Components/Footer/index'
import React from "react";
import { isAuth } from '../config/auth'
import axios from 'axios'

const user = isAuth()

class Portfolio extends React.Component {


  render(){
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
