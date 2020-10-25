import React from 'react';
import SearchContainer from '../SearchContainer/SearchContainer'
import Header from './Header'
import SubHeaders from './SubHeaders/index'
import {subHeaderOne, subHeaderTwo, subHeaderThree} from './SubHeaders/Data'

function Landing() {
  return (
    <div className="App">
      <Header />
      <SearchContainer />
      <SubHeaders {...subHeaderOne}/>
      <SubHeaders {...subHeaderTwo}/>
      <SubHeaders {...subHeaderThree}/>
    </div>
  );
}

export default Landing;
