//displys a message when the search returns no results 

import { render } from '@testing-library/react';
import React from 'react';

const NotFound = (props) => {
    return(
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    ) 
}

export default NotFound;