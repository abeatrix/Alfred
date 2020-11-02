import MainNavbar from '../Components/Navbar/MainNavbar'
import Footer from '../Components/Footer/index'
import {Profile} from '../Components/Profile/index'
import React from "react";

class ProfilePage extends React.Component {

  render(){
    return (
      <div className="App">
        <MainNavbar />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default ProfilePage
