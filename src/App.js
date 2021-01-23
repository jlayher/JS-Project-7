import React, { Component } from 'react';

//import Api components
//import HandleRoutes from './HandleRoutes';
import Nav from './components/Nav';
import Search from './components/Search.js';
import Fetch from './components/Fetch';
import FourOhFour from './components/FourOhFour';

//attempt at using react-router-dom 
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          
            <Search 
              {...this.props}
            />
            <Nav />
        
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/dogs"/>} />
            <Route exact path="/search/" render={() => <Redirect to="/search/dogs"/>} /> 
            <Route exact path="/search/:query" component={Fetch}/>

            <Route component={FourOhFour} />
          </Switch>

          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

