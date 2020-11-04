import React from "react";
import './styles/desktop.scss'
import './styles/desktop-inputs.scss'
import {Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/welcome";
import Main from "./components/main";
import Header from './components/header.js'
import Footer from './components/footer.js'
import NotFound from "./components/404";

function App() {
  return (
          <div id={"main"}>
              <Switch>
                  <Route exact path="/welcome" component={Welcome} />
                  <Route exact path="/main" component={Main} />
                  <Redirect from='/' to='/welcome'/>
                  <Route path='/notfound' component={NotFound} />
                  <Redirect from='*' to='/notfound' />
              </Switch>
          </div>

  );
}

export default App;
