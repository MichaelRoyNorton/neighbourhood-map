import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { compose, withProps } from 'recompose';
import PubMarker from './PubMarker.js'

//
const MyMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyA47PFgoG6SynkYt-VPid3XIcUhpuhcwWk",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div role="application" className="map-container" style={{ height: `calc(100vh - 110px)` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 51.507769, lng: -0.128327 }}
  >
    <div className="list-container">
      <i className="fas fa-times" onClick={props.handleClick}></i>
      {props.pubs.map((pub) => (
        <PubMarker
          key={pub.id}
          position={{ lat: pub.location.lat, lng: pub.location.lng }}
          name={pub.name}
          address={pub.location.formattedAddress}
          selectedPub={props.selectedPub}
        />
      ))}
    </div>
  </GoogleMap>
);



export default MyMap;
