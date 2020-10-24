import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import SearchContainer from './Components/SearchContainer/SearchContainer'
import Header from './Components/Landing/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SearchContainer />
      <Footer />
    </div>
  );
}

export default App;
