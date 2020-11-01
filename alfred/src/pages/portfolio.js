import MainNavbar from '../Components/Navbar/MainNavbar'
import PortfolioPage from '../Components/Portfolio/index'
import Footer from '../Components/Footer/index'


class Portfolio extends React.Component {
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
