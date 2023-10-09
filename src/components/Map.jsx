import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "./contexts/Cities.Context";
import { useGeolocation } from "./hooks/useGeolocation";
const Map = () => {
  const { cities } = useCities();
  const {
    isLoading: isLoadingPostion,
    position: geoPosition,
    getPosition,
  } = useGeolocation();
  const [mapPostion, setMapPostion] = useState([40, 0]);
  const [searchParam, setSearchParam] = useSearchParams();
  const maplat = searchParam.get("lat");
  const maplng = searchParam.get("lng");
  useEffect(
    function () {
      if (maplat && maplng) setMapPostion([maplat, maplng]);
    },
    [maplat, maplng]
  );
  useEffect(
    function () {
      if (geoPosition) setMapPostion([geoPosition.lat, geoPosition.lng]);
    },
    [geoPosition]
  );
  return (
    <div className={styles.mapContainer}>
      {!geoPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPostion ? "loading..." : "use your  position"}
        </Button>
      )}
      <MapContainer
        center={mapPostion}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.mapContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPostion} />
        <DetectClick />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigation = useNavigate();
  useMapEvent({
    click: (e) => navigation(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}
export default Map;
