import { useState, useEffect } from "react";
import PortfolioModel from "../Model/PortfolioModel";

function useShowPortDetail(portId) {
    const [portfoliodetail, setPortfolioDetail] = useState([]);
    function fetchPortfolioDetail(portId) {
        PortfolioModel.detail(portId).then((data) => {
            setPortfolioDetail(data);
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
