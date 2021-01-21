//apps navigation links

import React from 'react';

const Nav = (props) => {
    return (
    <nav className="main-nav">
        <ul>
          <li><a href='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=149df6bb8a1da9ea60f384075c9f9acf&tags=cats&per_page=24&format=json&nojsoncallback=1&auth_token=72157717957915026-f1d1bb6068eaae92&api_sig=f0eb91b87aac4bb40d26c6ac006e29e1'>Cats</a></li>
          <li><a href='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=149df6bb8a1da9ea60f384075c9f9acf&tags=dogs&per_page=24&format=json&nojsoncallback=1&auth_token=72157717957915026-f1d1bb6068eaae92&api_sig=f575b079e1bbaefbfdce37dcc62565c9'>Dogs</a></li>
          <li><a href='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=149df6bb8a1da9ea60f384075c9f9acf&tags=computers&per_page=24&format=json&nojsoncallback=1&auth_token=72157717957915026-f1d1bb6068eaae92&api_sig=93cb712417989327a100c53e1fce3d58'>Computers</a></li>
        </ul>
    </nav>    
    )
}

export default Nav;