import React from 'react'

function GifSearch(props) {
    return  <label> Enter a Search Term 

    <input type="text" value={props.value} onChange={props.changeHandler} />
    </label>
}



export default GifSearch