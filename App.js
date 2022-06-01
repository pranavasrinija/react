import "./App.css";
import Reservation from "./Reservation";
import { Navigation } from "./Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Navigation />

        <Switch>
          <Route path="/Reservation" component={Reservation} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
