import { useState, useEffect } from "react";
import PortfolioModel from "../Model/PortfolioModel";
import { useRecoilState } from "recoil";
import {userPortState} from '../recoil/atoms'

function usePortfolio(userId) {
    // console.log(userId)

    const [userPort, setuserPort] = useRecoilState(userPortState);

    const [portfolio, setPortfolio] = useState([]);

    function fetchPortfolio(userId) {
        PortfolioModel.show(userId).then((data) => {
            setPortfolio(data);
            setuserPort(data);
            // console.log(userPort)
            // console.log(data)
        });
    }


    useEffect(
        function () {
            fetchPortfolio(userId);
        },
        []
    );

    return [portfolio, fetchPortfolio];
}

export default usePortfolio;
