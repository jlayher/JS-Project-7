//displays the li and img elements

import React from 'react';


//dont know yet if props are needed
//img src will be replaced with url prop
const Photo = (props) => {
    return (
        <li>
            <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title} />
        </li>
    );
}

export default Photo;


//code I was Working On
// const Photo = (props) => {
//     return (
//         <li>
//             <img src={props.query} alt="" />
//         </li>

//     );
// }
//og code in case I mess something up
// const Photo = (props) => {
//     return (
//         <li>
//             <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
//         </li>

//     );
// }
