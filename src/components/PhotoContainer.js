import React, { Component } from 'react';

//Import Components
import Photo from './Photo';
import NotFound from './NotFound';


/* PhotoContainer loops over the returned array from the fetch request 
and renders Photo components for all the returned items */  
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
                <h2>{this.props.query}</h2>
                {this.props.loading ? <h2>Loading...</h2> : <ul>{photos}</ul>}
            </div>
        )
    }
}

export default PhotoContainer;

