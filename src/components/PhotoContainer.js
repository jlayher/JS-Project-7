import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

//changed PhotoContainer from a class component, to a functional component.  State handled in parent App
class PhotoContainer extends Component {
    render(){
    
        const photoArray = this.props.data;
        const photos = []
            if (photoArray.length > 0) {
                let photos = photoArray.map(photo => {
                    <Photo key={photo.id}/>
                })
            }

        return(
            <div className="photo-container">
                <h2>Results</h2>
                {/* 1.  Loop over the photos array using props and map.
                2.  Create a new <Photo /> component for each item in the array. 
                3.  What do I need to pass to the Photo Component? 
                4.  Set up a conditional statement to map over and return the photo components if the 
                photo array has items in it.  Else, return the <NotFound /> Component */}
                {/*generate these list items by looping over an array of the data returned by flickr*/}
                <ul>
                    <li>
                        <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
                    </li>
                {/* only render NotFound if there are no images */}
                    <NotFound />
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
