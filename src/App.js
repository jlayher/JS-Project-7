import React, { Component } from 'react';
import apiKey from './config.js';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer.js';
import Search from './components/Search.js';
const key = apiKey.value;

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }
  //attempt at using componentDidMount, and Axios to generate Flickr data and update state
  // componentDidMount() {
  //   axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     .then(response => {
  //       this.setState({
  //         gifs: response.data.data
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }


  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        <PhotoContainer />  
      </div>
    );
  }
}

export default App;
