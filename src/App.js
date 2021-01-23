import React, { Component } from 'react';

//import Api components
//import HandleRoutes from './HandleRoutes';
import Nav from './components/Nav';
import Search from './components/Search.js';
import Fetch from './components/Fetch';

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
          
            <Search />
            <Nav />
        
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/dogs"/>} />
            <Route exact path="/search" render={() => <Redirect to="/search/dogs"/>} />
            <Route exact path="/search/:query" component={Fetch}/>

          </Switch>

          
        </div>
        </BrowserRouter>
    );
  }
}

export default App;









//all of this was originally in the App component, before the render call
 //moved to photoContainer
  // constructor() {
  //   super();
  //   this.state = {
  //     photos: []
  //   };
  // }

  // componentDidMount() {
  //   this.fetchData();
  // }

      // what i was using previously in the get request:  
      // `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
  
  // fetchData = () =>{
  //   //make a conditional statement to assign query a value that will be plugged into the get request.  
  //       //If a user has input a search value, updated query (through state?) and input it into the get request url
  //       //If user clicks on a button in the nav, update query to the predertimined value, asnd run the fetchData method
  //       //If a user inputs something in the search that returns no value, render the NotFound component


  //   //query set to "dogs" for now
  //   let query = 'dogs';
  //   //format api key
  //   const key = apiKey.toString();
  //   let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
  //   axios.get(url)
  //     .then(response => {
  //       const photosReturned = response.data.photos;
  //       this.setState({
  //         photos: photosReturned
  //       })
  //       console.log(this.state.photos)
  //     })
  //     .catch(error => {
  //       console.log("Error Fetching Data -_-")
  //     });
  // }