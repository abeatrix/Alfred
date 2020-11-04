import { useState, useEffect } from "react";
import PortfolioModel from "../Model/PortfolioModel";
import { useRecoilState } from "recoil";
import {userPortState, userPortStatusState, userPortListState} from '../recoil/atoms'

function usePortfolio(userId) {
    // console.log(userId)

    const [userPort, setuserPort] = useRecoilState(userPortState);
    const [userPortStatus, setuserPortStatus] = useRecoilState(userPortStatusState);
    const [userPortList, setuserPortList] = useRecoilState(userPortListState);
    const [portfolio, setPortfolio] = useState([]);

    function fetchPortfolio(userId) {
        PortfolioModel.show(userId).then((data) => {
            setPortfolio(data);
            setuserPort(data);
            setuserPortList(data)
            setuserPortStatus(true);
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
