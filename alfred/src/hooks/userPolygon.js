import { useState, useEffect } from "react";
import PolygonModel from "../Model/PolygonModel";

function usePolygon(symbol) {

  const [polystocks, setPolyStock] = useState([]);

  function fetchPolygon(ticker) {
    console.log(ticker)
    if (ticker) {
      PolygonModel.show(ticker).then((data) => {
        setPolyStock(data);
      });
    } else {
      PolygonModel.all().then((data) => {
        setPolyStock(data);
      });
    }
  }

  useEffect(
    function () {
      fetchPolygon(symbol);
    },
    [symbol]
  );

  return [polystocks, fetchPolygon];
}

export default usePolygon;
