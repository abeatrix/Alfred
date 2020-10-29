import { useState, useEffect } from "react";
import PolygonModel from "../Model/PolygonModel";

function usePolygon(symbol) {

  const [polystocks, setPolyStock] = useState([]);

  function fetchPolygon(ticker) {
    if (ticker) {
      PolygonModel.show(ticker).then((data) => {
        setPolyStock(data.polystock);
      });
    } else {
      PolygonModel.all().then((data) => {
        setPolyStock(data.polystocks);
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
