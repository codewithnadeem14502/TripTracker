import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
const Map = () => {
  const navigation = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigation("form")}>
      <h1>map</h1>
      <h2>{lat}</h2>
      <h2>{lng}</h2>

      <button
        onClick={() => {
          setSearchParam({ lat: -23, lng: 23 });
        }}
      >
        click me{" "}
      </button>
    </div>
  );
};

export default Map;
