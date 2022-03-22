import SELECT_PLACE from "./mapsTypes";

const initialState = {
  address: "",
  mapCenter: {
    lat: 3.1237986035960517,
    lng: 101.62948964720643,
  },
  searchHistory: [],
};

const mapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PLACE:
      return {
        ...state,
        searchHistory: addLocationToList({
          currentList: state.searchHistory,
          payload: action.payload,
        }),
      };
    default:
      return state;
  }
};

const addLocationToList = ({ currentList, payload }) => {
  currentList.push({ name: payload });
  return currentList;
};

export default mapsReducer;
