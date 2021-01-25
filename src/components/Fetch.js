import React, {Component} from 'react';
import axios from 'axios';

//Import API Key From Config File
import apiKey from '../config.js';

//Import Components 
import PhotoContainer from './PhotoContainer';

class Fetch extends Component {

    state = {
        photos: [],
        query: this.props.match.params.query,
        loading: true
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.query);
    }

    //add in a componentDidUpdate method for previous Props
    componentDidUpdate(prevProps) {
        let prevQuery = prevProps.match.params.query;
        let query = this.props.match.params.query;
        if(prevQuery !== query) {
            this.fetchData(query);
            this.setState({
                query: query
            })
        }
    }

    //fetch data function.  Takes in query param and api key, to create the url for the axios request
    fetchData = (query) =>{
        this.setState({
            loading: true
        })
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
        axios.get(url)
          .then(response => {
            const photosReturned = response.data.photos.photo;
            this.setState({
              photos: photosReturned,
              loading: false
            })
            console.log(photosReturned)
          })
          .catch(error => {
            console.log("Error Fetching Data -_-")
          });
      }


    render(){
        return(
            <PhotoContainer 
                query = {this.state.query}
                photoArray= {this.state.photos}
                loading= {this.state.loading}
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