import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';



class PhotoContainer extends Component {
    render(){
      
      const photoArray = this.props.photoArray;
      let photos;

      if (photoArray && photoArray.length > 0) {
        photos = photoArray.map( photo => 
          <Photo
            server={photo.server}
            id={photo.id}
            secret={photo.secret}
            title={photo.title}
            key={photo.id.toString()}>
          </Photo>
        )
      } else {
        photos = <NotFound />
      }

        return(
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                  {photos}
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
