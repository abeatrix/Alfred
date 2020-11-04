import { useState, useEffect } from "react";
import PortfolioModel from "../Model/PortfolioModel";
import { useRecoilState } from "recoil";
import { userPortItemState } from '../recoil/atoms'

function useShowPortDetail(portId) {

    const [userPort, setPortItemState] = useRecoilState(userPortItemState);

    const [portfoliodetail, setPortfolioDetail] = useState([]);

    function fetchPortfolioDetail(portId) {
        PortfolioModel.detail(portId).then((data) => {
            setPortfolioDetail(data);
            setPortItemState(data)
        });
    }


    useEffect(
        function () {
            fetchPortfolioDetail(portId);
        },
        []
    );

    return [portfoliodetail, fetchPortfolioDetail];
}

export default useShowPortDetail;
