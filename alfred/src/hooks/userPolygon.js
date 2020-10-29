import { useState, useEffect } from "react";
import PolygonModel from "../Model/PolygonModel";

function usePolygon(query) {
  const [polystock, setPolyStock] = useState([]);

  function fetchPolygon(id) {
    if (id) {
      PolygonModel.show(query).then((data) => {
        setGames(data.polystock);
      });
    } else {
      PolygonModel.all().then((data) => {
        setGames(data.polystock);
      });
    }
  }

  useEffect(
    function () {
      fetchGames(query);
    },
    [query]
  );

  return [polystock, fetchPolygon];
}

export default usePolygon;
