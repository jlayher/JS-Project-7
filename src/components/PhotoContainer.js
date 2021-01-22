import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import apiKey from '../config.js';
import axios from 'axios';

//changed PhotoContainer from a class component, to a functional component.  State handled in parent App
class PhotoContainer extends Component {

    constructor() {
        super();
        this.state = {
          photos: [],
          photoList: []
        };
      }
    
      componentDidMount() {
        let data = this.fetchData();
        this.createPhotoList();
      }

      fetchData = () =>{
        //query set to "dogs" for now
        let query = `dogs`;
        //format api key
        const key = apiKey.toString();
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
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

      createPhotoList = () => {
        let photoArray = this.state.photos;
        console.log(photoArray);
        let photoList;
       
        if (photoArray.length > 0){
            photoList = photoArray.map( photo => {
                <Photo 
                    server={photo.server}
                    id={photo.id}
                    secret={photo.secret}
                    title={photo.title}
                    key={photo.id.toString()}
                />
            })
        } else {
            photoList = <NotFound />
        }
      }
    
      

    render(){
        return(
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                   
                </ul>
            </div>
        )
    }
}

export default PhotoContainer;

//copying template code in case I screw things up
// class PhotoContainer extends Component {

//     render() {
//         return(
//             <div className="photo-container">
//                 <h2>Results</h2>
//                 {/*generate these list items by looping over an array of the data returned by flickr*/}
//                 <ul>
//                     <li>
//                         <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
//                     </li>
//                     <li>
//                         <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
//                     </li>
//                     <li>
//                         <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
//                     </li>
//                     <li>
//                         <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
//                     </li>
//                 {/* only render NotFound if there are no images */}
//                     <NotFound />
//                 </ul>
//             </div>
//         )
//     }
// }
