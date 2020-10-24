import React from 'react';
import TopNavbar from './Components/Navbar/TopNavbar'
import SearchContainer from './Components/SearchContainer/SearchContainer'
import Header from './Components/Landing/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Header />
      <SearchContainer />
      <Footer />
    </div>
  );
}

export default App;
