import { useState, useEffect } from "react";
import PortfolioModel from "../Model/PortfolioModel";

function usePortfolio(user) {

    const [portfolio, setPortfolio] = useState([]);
    let userId = user
    function fetchPortfolio() {

        PortfolioModel.show(userId).then((data) => {
            setPortfolio(data);
        });
    }


    useEffect(
        function () {
            fetchPortfolio(user);
        },
        []
    );

    return [portfolio, fetchPortfolio];
}

export default usePortfolio;
