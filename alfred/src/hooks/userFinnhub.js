import { useState, useEffect } from "react";
import FinnhubModel from "../Model/FinnhubModel";


function useFinnHub () {

  const [finnNews, setFinnNews] = useState([]);

  function fetchFinnyNews() {
    FinnhubModel.news().then((data) => {setFinnNews(data);});
}


  useEffect(
    function () {
        fetchFinnyNews();
    },
    []
  );

  return [finnNews, fetchFinnyNews];

}

export default useFinnHub;
