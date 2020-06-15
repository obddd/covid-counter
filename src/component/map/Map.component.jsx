import MapGL, { Marker } from '@urbica/react-map-gl';
import Cluster from '@urbica/react-map-gl-cluster';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState, useEffect } from 'react';
import { fetchCountryData } from '../../api/index';
import './Map.style.css';

const Map = () => {
  const [countryData, setCountryData] = useState([]);
  let TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; 
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 28.77,
    longitude: 35.63,
    zoom: 1.4,
  });

  useEffect(() => {
    const fetchedApi = async () => {
      setCountryData(await fetchCountryData());
    };
    fetchedApi();
  }, []);
  
  const ClusterMarker = ({ longitude, latitude, pointCount }) => (
    <Marker longitude={longitude} latitude={latitude}>
      <div
        className="cluster-marker"
        style={{
          width: `${10 + (pointCount / 9) * 20}px`,
          height: `${10 + (pointCount / 9) * 20}px`,
        }}
      >
        {pointCount}
      </div>
    </Marker>
  );
  return (
    <MapGL
      {...viewport}
      style={{ width: '100%', height: '100vh' }}
      mapStyle="mapbox://styles/obaiddd/ckbfpd2bf14ok1isaiwwsfnt5"
      accessToken={TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Cluster radius={20} extent={600} nodeSize={64} component={ClusterMarker}>
        {countryData.map((country, i) => (
          <Marker
            key={i}
            latitude={country.countryInfo.lat}
            longitude={country.countryInfo.long}
          >
            <div className="marker"
            style={{
                width: `${20 + (country.active/ 10000) }px`,
                height: `${20 + (country.active / 10000) }px`,
              }}>{country.active}</div>
          </Marker>
        ))}
      </Cluster>
    </MapGL>
  );
};

export default Map;
