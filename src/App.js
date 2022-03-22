import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import GoogleMaps from "./components/GooglePlaces";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GoogleMaps />
      </div>
    </Provider>
  );
}

export default App;
