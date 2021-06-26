import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/Auth/AuthState";
import Register from "./components/auth/Register";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/layout/Alerts";
import Login from "./components/auth/Login";
import { Fragment } from "react";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <NavBar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
