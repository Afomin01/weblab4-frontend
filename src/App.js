import React from "react";
import './styles/master.scss'
import './styles/graph.scss'
import {Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/pages/welcome";
import Main from "./components/pages/main";
import NotFound from "./components/errors/not-found";
import Cookies from 'js-cookie'
import history from './history';


function App() {
    if(Cookies.get('is-logged-in')===null) Cookies.set('is-logged-in','false')

    if(Cookies.get('is-logged-in')) history.push("/main")

  return (
          <div id={"main"}>
              <Switch>
                  <Route exact path="/welcome" component={Welcome} />
                  <Route exact path="/main" component={Main} />
                  <Redirect from='/' to={'/welcome'}/>
                  <Route path='/notfound' component={NotFound} />
                  <Redirect from='*' to='/notfound' />
              </Switch>
          </div>

  );
}

export default App;
