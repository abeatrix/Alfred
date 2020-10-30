import React from "react";
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import {isAuth} from '../../config/auth'
import UserModel from '../../Model/UserModel'
import usePortfolio from '../../hooks/usePortfolio'
import axios from 'axios';
import PortfolioStockList from '../../Components/Portfolio/Dashboard/PortfolioStockList'
import { DashboardContainer, PortfolioContainer } from '../Portfolio/PortfolioElements';

export const Profile =  () => {
    const user = isAuth()
    const userId = user._id

    const [portfolio, setPortfolio] = usePortfolio(userId);


    // const userportfolio = portfolio.data.portfolio

        return (
        <div>
                    {/* <DashboardContainer>
                    </DashboardContainer> */}

                    <PortfolioContainer>

                        <PortfolioStockList data={portfolio}/>

                    </PortfolioContainer>
        </div>
    );

}



// class Profile extends React.Component {
//     state = {
//         userId: isAuth()._id,
//         results: null,
//     }

//     UserModel.search(userId)
//     .then(response => {
//         this.setState({
//             results: response.data,
//         })
//     })

//     // console.log(portfolio.data)

//     render(){
//         return (
//             <div>
//                         {/* <DashboardContainer>
//                         </DashboardContainer> */}

//                         <PortfolioContainer>

//                             {/* <PortfolioStockList data={portfolio}/> */}

//                         </PortfolioContainer>
//             </div>
//         );
//     }

// }
// export default Profile;
