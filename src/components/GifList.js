import React from 'react';



function GifList(props) {
    console.log(props.gif.images)
    return <li><img src={props.gif.images.original.url} height= "314" width="320" alt=""></img></li>
    
}

export default GifList