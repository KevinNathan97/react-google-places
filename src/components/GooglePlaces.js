import { useState } from "react";
import { connect } from "react-redux";
import { selectPlace } from "../redux";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import SearchBar from "./SearchBar";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import GoogleMaps from "./GoogleMaps";
import History from "./History";

const GooglePlaces = (props) => {
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 3.1237986035960517,
    lng: 101.62948964720643,
  });

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address) => {
    props.selectPlace(address);
    setAddress(address);

    try {
      const res = await geocodeByAddress(address);
      const coordinates = await getLatLng(res[0] || null);

      setMapCenter(coordinates);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="parent">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <SearchBar
              inputProps={getInputProps({
                placeholder: "Search Places",
                className: "location-search-input",
              })}
              onChange={handleChange}
              value={address}
            />

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <History list={props.searchHistory} />

      <GoogleMaps mapCenter={mapCenter} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.address,
    mapCenter: state.mapCenter,
    searchHistory: state.searchHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectPlace: (payload) => dispatch(selectPlace(payload)),
  };
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(connect(mapStateToProps, mapDispatchToProps)(GooglePlaces));
