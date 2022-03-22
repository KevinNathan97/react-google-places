import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const GoogleMaps = (props) => {
  const { mapCenter } = props;

  return (
    <div className="child">
      <Map
        style={{
          height: "80%",
          width: "80%",
          margin: "auto",
          marginTop: "40px",
        }}
        google={props.google}
        initialCenter={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
        center={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
      >
        <Marker
          position={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(GoogleMaps);
