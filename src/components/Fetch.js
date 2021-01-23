import React, {Component} from 'react';
import axios from 'axios';

import apiKey from '../config.js';

import PhotoContainer from './PhotoContainer';

class Fetch extends Component {

    state = {
        photos: [],
        query: this.props.match.params.query
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.query);
    }

    //add in a componentDidUpdate function for previous Props


    fetchData = (query) =>{
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
        axios.get(url)
          .then(response => {
            const photosReturned = response.data.photos.photo;
            this.setState({
              photos: photosReturned
            })
            console.log(photosReturned)
          })
          .catch(error => {
            console.log("Error Fetching Data -_-")
          });
      }


    render(){
        {console.log(this.state.photos)}
        return(
            
            <PhotoContainer 
                query = {this.state.query}
                photoArray= {this.state.photos}
            />
        )
    }

}

export default Fetch;



































// import React, { Component } from 'react';
// import axios from 'axios';

// //Import API key
// import apiKey from './config.js';

// import PhotoContainer from './PhotoContainer';

// class HandleRoutes extends Component {

//     state = {
//         photos: []
//     }
//     render(){
//         return(
//             <Photo
//         )
//     }
// }

// export default HandleRoutes;