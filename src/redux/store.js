import { createStore } from "redux";
import mapsReducer from "./maps/mapsReducer";

const store = createStore(mapsReducer);

export default store;
