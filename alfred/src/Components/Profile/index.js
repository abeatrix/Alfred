import axios from 'axios';

class Profile extends React.Component {
    state = {
        data: null
    }

    // marketHour = () =>{
    //     const res = axios(`https://financialmodelingprep.com/api/v3/market-hours?apikey=6a81c4fba84851a61900dc1666ff4890`)
    //         .then(result =>
    //             { return console.log(result.data[0].isTheStockMarketOpen)
    //             })
    //         .catch(error => { console.error(error); return Promise.reject(error); });
    // }


    render() {

        return (
        <div>
            <h1>testing</h1>
        </div>
        );
    }

}
export default Profile;

