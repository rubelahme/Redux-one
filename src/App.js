import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Contact from "./components/Contact/Contact/Contact";
import Service from "./components/Service/Service/Service";
import NoMatch from "./components/NoMatch/NoMatch";

import { createContext, useState } from "react";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login/Login";
export const createProvider = createContext();
function App() {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
  });
  return (
    <createProvider.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/service">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/singIn">
            <Home></Home>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </createProvider.Provider>
  );
}

export default App;
