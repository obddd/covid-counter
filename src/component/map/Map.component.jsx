import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { fetchCountryData } from '../../api/index';
import './Map.style.css'

const Map = () => {
    const [ countryData, setCountryData ] = useState([]);
    const TOKEN= "pk.eyJ1Ijoib2JhaWRkZCIsImEiOiJja2JmamUxNnAwd2VuMnVwOGphemJ2Ymc0In0.h5mtGJjtxHdChAEjNTypZg"
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 0,
        longitude: 0,
        zoom: 1.2
      });
      useEffect(() => {
          const fetchedApi = async() => {
              setCountryData(await fetchCountryData())
          }
          fetchedApi()
      }, [])
      console.log(countryData)
    return (
        <ReactMapGL className='map' {...viewport}
        mapStyle='mapbox://styles/obaiddd/ckbfpd2bf14ok1isaiwwsfnt5'
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={TOKEN}>
            {countryData.map((country, i) => (
                <Marker key={i} latitude={country.countryInfo.lat} longitude={country.countryInfo.long}>
                    <p>{country.active}</p>
                </Marker>
            ))}
        </ReactMapGL>
    );
};

export default Map;