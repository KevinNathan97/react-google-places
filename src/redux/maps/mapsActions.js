import SELECT_PLACE from "./mapsTypes";

export const selectPlace = (payload) => {
  return {
    type: SELECT_PLACE,
    payload,
  };
};
