import { useState, useEffect } from "react";
import PortfolioModel from "../Model/PortfolioModel";

function usePortfolio(userId) {
    // console.log(userId)
    const [portfolio, setPortfolio] = useState([]);
    function fetchPortfolio(userId) {
        PortfolioModel.show(userId).then((data) => {
            console.log(data)
            setPortfolio(data);
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
