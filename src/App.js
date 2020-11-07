import React from "react";
import './styles/desktop.scss'
import './styles/desktop-inputs.scss'
import './styles/graph.scss'
import {Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/pages/welcome";
import Main from "./components/pages/main";
import NotFound from "./components/errors/not-found";
import Cookies from 'js-cookie'

function App() {
  return (
          <div id={"main"}>
              <Switch>
                  <Route exact path="/welcome" component={Welcome} />
                  <Route exact path="/main" component={Main} />
                  <Redirect from='/' to={Cookies.get('current-username') == null ? '/welcome' : '/main'}/>
                  <Route path='/notfound' component={NotFound} />
                  <Redirect from='*' to='/notfound' />
              </Switch>
          </div>

  );
}

export default App;
