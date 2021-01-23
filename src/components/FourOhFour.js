//displays 404 page for when a url is entered that doesn't match an existing route
import React, {Component} from 'react';
class FourOhFour extends Component {

    render(){
        return(
                <li>
                    <h3>404 Error.  No Page Found</h3>
                    <p>The URL entered doesn't match any route</p>
                </li>

        ) 
    }
}

export default FourOhFour;