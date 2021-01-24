import React, { Component } from 'react';

//Import Components
import Nav from './components/Nav';
import Search from './components/Search.js';
import Fetch from './components/Fetch';
import FourOhFour from './components/FourOhFour';

//Set up React Router 
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// App Component Renders 
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

            <Route component={FourOhFour} render={() => <Redirect to="/search/FourOhFour"/>}/>
          </Switch>

          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

