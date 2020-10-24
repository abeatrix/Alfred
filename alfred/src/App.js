import React from 'react';
import TopNavbar from './Components/Navbar/TopNavbar'
import SearchContainer from './Components/SearchContainer/SearchContainer'
import Header from './Components/Landing/Header'
import SubHeaders from './Components/Landing/SubHeaders/index'
import Footer from './Components/Footer/index'
import {SubHeaderONE} from './Components/Landing/SubHeaders/Data'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Header />
      <SearchContainer />
      <SubHeaders {...SubHeaderONE}/>
      <Footer />
    </div>
  );
}

export default App;
